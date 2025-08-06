import google.generativeai as genai
from dotenv import load_dotenv
import os

load_dotenv()
api_key = os.getenv("GEMINI_API_KEY")
genai.configure(api_key=api_key)

model = genai.GenerativeModel("gemini-2.5-flash")  # or gemini-1.5-pro

prompt = input("Enter you message:\n")

response = model.generate_content(prompt)
print(response.text)
