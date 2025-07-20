import fitz  # PyMuPDF
import pytesseract
from PIL import Image
import io
from pdf2image import convert_from_path
import re

# Only for Windows
pytesseract.pytesseract.tesseract_cmd = r'C:\\Program Files\\Tesseract-OCR\\tesseract.exe'

def clean_text(text):
    """
    Clean up extracted text: remove extra newlines, fix spacing, remove garbage characters.
    """
    # Remove excessive newlines and whitespace
    text = re.sub(r'\n+', '\n', text)           # Collapse multiple newlines
    text = re.sub(r'[ \t]+', ' ', text)         # Replace multiple spaces/tabs with one space
    text = re.sub(r' +\n', '\n', text)          # Remove trailing spaces before newline
    text = re.sub(r'\n +', '\n', text)          # Remove leading spaces after newline
    text = re.sub(
        r'(?i)\b(?:manipal university|central school|jaipur|faculty of|b\.tech\.?|end term examination|cs\d{3,4}|duration:?.*|max\.? marks:?.*|closed book|instructions:?.*|calculator.*allowed|marks mapping|question script)\b.*\n?', 
        '', 
        text
    )


    # Remove non-ASCII characters (optional)
    text = text.encode('utf-8', 'ignore').decode()

    # Fix common OCR errors (optional, can extend this list)
    text = text.replace('|', 'I')               # OCR often confuses | with I
    text = text.replace('ﬁ', 'fi')              # Ligature cleanup
    text = text.replace('ﬂ', 'fl')

    return text.strip()


def extract_text_from_pdf(pdf_path):
    doc = fitz.open(pdf_path)
    final_text = ""

    for page_num in range(len(doc)):
        page = doc.load_page(page_num)
        text = page.get_text()

        if text.strip():
            cleaned = clean_text(text)
            final_text += cleaned
        else:
            images = convert_from_path(pdf_path, first_page=page_num+1, last_page=page_num+1)
            ocr_text = pytesseract.image_to_string(images[0])
            cleaned = clean_text(ocr_text)
            final_text += cleaned

    return final_text





# pdf_file = "pdf to text/os ete 2023.pdf"
# text_output = extract_text_from_pdf(pdf_file)

# # saving output in a file
# with open("pdf to text/extracted_clean_text.txt", "w", encoding="utf-8") as f:
#     f.write(text_output)
