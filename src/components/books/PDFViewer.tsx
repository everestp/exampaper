import { useEffect, useState } from "react";
import Modal from "react-modal";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";

interface PDFViewerProps {
  pdfUrl: string;
}

Modal.setAppElement("#root"); // Ensure accessibility for screen readers

  const PDFViewer = ({ pdfUrl }: PDFViewerProps) => {
  const [zoom, setZoom] = useState<number>(1);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.25, 2));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.25, 0.5));
  const handleResetZoom = () => setZoom(1);

  return (
    <>
      {/* Button to open the PDF viewer */}
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 hover:bg-gray-100"
      >
        <Eye className="w-4 h-4" />
        View
      </Button>

      {/* Modal for PDF Viewer */}
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
<div className="bg-white p-4 rounded-lg w-[90%] sm:w-[75%] h-[calc(100vh-80px)] sm:h-[calc(100vh-40px)] overflow-auto relative max-w-4xl mx-auto flex flex-col">
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 text-red-600 text-xl"
            aria-label="Close PDF Viewer"
          >
            ✖
          </button>

          {/* PDF Viewer Controls */}
          <div className="border-b p-2 flex justify-between items-center bg-muted/50">
            <div className="text-sm font-medium">PDF Viewer</div>
           
          </div>

          {/* PDF Display */}
          <div className="flex-1 overflow-auto bg-muted/30 h-full w-full">
            <iframe
              src={`${pdfUrl}#toolbar=0&zoom=${zoom * 100}`}
              title="PDF Viewer"
              className="w-full h-full border-none"
            />
          </div>
        </div>
      </Modal>
    </>
  );
};
export default PDFViewer