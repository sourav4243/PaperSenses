import fitz  # PyMuPDF
import pytesseract
from PIL import Image
import io
from pdf2image import convert_from_bytes
import re

# Only for Windows
pytesseract.pytesseract.tesseract_cmd = r'C:\\Program Files\\Tesseract-OCR\\tesseract.exe'

def clean_text(text):
    """
    Clean up extracted text: remove extra newlines, fix spacing, remove garbage characters.
    """
    text = re.sub(r'\n+', '\n', text)
    text = re.sub(r'[ \t]+', ' ', text)
    text = re.sub(r' +\n', '\n', text)
    text = re.sub(r'\n +', '\n', text)
    text = re.sub(
        r'(?i)\b(?:manipal university|central school|jaipur|faculty of|b\.tech\.?|end term examination|cs\d{3,4}|duration:?.*|max\.? marks:?.*|closed book|instructions:?.*|calculator.*allowed|marks mapping|question script)\b.*\n?',
        '',
        text
    )
    text = text.encode('utf-8', 'ignore').decode()
    text = text.replace('|', 'I')
    text = text.replace('ﬁ', 'fi')
    text = text.replace('ﬂ', 'fl')

    return text.strip()

def extract_text_from_file(file, filename, content):
    ext = filename.lower().split('.')[-1]
    final_text = ""

    try:
        if ext == "pdf":
            # Load from memory (not disk)
            doc = fitz.open(stream=content, filetype="pdf")
            for page_num in range(len(doc)):
                page = doc.load_page(page_num)
                text = page.get_text()
                if text.strip():
                    final_text += clean_text(text)
                else:
                    # OCR fallback using pdf2image
                    images = convert_from_bytes(content, first_page=page_num+1, last_page=page_num+1)
                    ocr_text = pytesseract.image_to_string(images[0])
                    final_text += clean_text(ocr_text)

        elif ext == "txt":
            final_text = clean_text(content.decode("utf-8", errors="ignore"))

        elif ext in ["jpg", "jpeg", "png"]:
            image = Image.open(io.BytesIO(content))
            ocr_text = pytesseract.image_to_string(image)
            final_text = clean_text(ocr_text)

        else:
            final_text = "[Unsupported file type]"

    except Exception as e:
        final_text = f"[Error extracting text: {str(e)}]"

    return final_text
