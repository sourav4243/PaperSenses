import { useState } from "react";
import { FileText, CheckCircle, AlertCircle } from "lucide-react";

export default function SyllabusUploadSection() {
  const [syllabusText, setSyllabusText] = useState("");
  const [syllabusUploaded, setSyllabusUploaded] = useState(false);
  const [activeTab, setActiveTab] = useState("paste");

  const handleSyllabusSubmit = () => {
    if (syllabusText.trim()) {
      setSyllabusUploaded(true);
      alert("Syllabus saved!");
    }
  };

  return (
    <div className="rounded-xl shadow-lg border-0 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/50 dark:to-emerald-950/50 p-3 space-y-4">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-2xl font-medium text-green-700 dark:text-green-300">
          <FileText className="h-5 w-5" />
          <span>Add Your Syllabus</span>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
          This helps us analyze chapter importance and map questions accurately.
        </p>
      </div>

      {/* Tabs */}
      <div className="space-y-4">
        <div className="grid grid-cols-2 rounded-lg overflow-hidden border border-green-300 dark:border-green-700 bg-white dark:bg-[#101828]">
          <button
            onClick={() => setActiveTab("paste")}
            className={`py-2 m-1 rounded-md text-sm font-medium ${
              activeTab === "paste"
                ? "bg-green-600 text-white"
                : "text-green-600 dark:text-green-400"
            }`}
          >
            Paste Text
          </button>
          <button
            onClick={() => setActiveTab("upload")}
            className={`py-2 m-1 rounded-md text-sm font-medium ${
              activeTab === "upload"
                ? "bg-green-600 text-white"
                : "text-green-600 dark:text-green-400"
            }`}
          >
            Upload File
          </button>
        </div>

        {/* Paste Tab Content */}
        {activeTab === "paste" && (
          <div className="space-y-3">
            <textarea
              value={syllabusText}
              onChange={(e) => setSyllabusText(e.target.value)}
              placeholder={`Unit 1 – Process Management\nUnit 2 – Memory Management\nUnit 3 – File System\nUnit 4 – I/O Management\nUnit 5 – Security`}
              className="w-full min-h-30 p-3 border border-gray-300 dark:border-gray-700 rounded-lg resize-none bg-white dark:bg-gray-900 text-sm"
            />
            <button
              onClick={handleSyllabusSubmit}
              disabled={!syllabusText.trim()}
              className={`w-full py-2 px-4 rounded-lg text-white font-medium ${
                syllabusText.trim()
                  ? "bg-green-600 hover:bg-green-700"
                  : "bg-green-800 cursor-not-allowed"
              } transition-all`}
            >
              Save Syllabus
            </button>
          </div>
        )}

        {/* Upload Tab Content */}
        {activeTab === "upload" && (
          <div className="space-y-4">
            <div className="border-2 border-dashed border-green-300 dark:border-green-700 rounded-lg p-6 text-center">
              <FileText className="h-8 w-8 text-green-500 mx-auto mb-2" />
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Upload PDF or DOCX file
              </p>
              <input
                type="file"
                accept=".pdf,.docx"
                className="hidden"
                id="syllabusUpload"
                onChange={(e) => {
                  if (e.target.files?.[0]) {
                    setSyllabusUploaded(true);
                    alert("Syllabus uploaded and processed!");
                  }
                }}
              />
              <label htmlFor="syllabusUpload">
                <div className="mt-2 inline-block bg-green-600 hover:bg-green-700 text-white text-sm px-4 py-2 rounded-lg cursor-pointer transition-all">
                  Choose File
                </div>
              </label>
            </div>
          </div>
        )}

        {/* Status Messages */}
        {syllabusUploaded ? (
          <div className="mt-4 p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span className="text-sm font-medium text-green-700 dark:text-green-400">
                Syllabus Uploaded Successfully
              </span>
            </div>
          </div>
        ) : (
          <div className="mt-4 p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
            <div className="flex items-center gap-2">
              <AlertCircle className="h-3 w-3 text-orange-600" />
              <span className="text-xs font-medium text-orange-700 dark:text-orange-400">
                Syllabus Required
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
