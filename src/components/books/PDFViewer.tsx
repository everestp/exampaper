import { useState } from "react";
import Modal from "react-modal";
import { Button } from "@/components/ui/button";
import { Maximize2, Minimize2, ZoomIn, ZoomOut, X } from "lucide-react";

interface PDFViewerProps {
  pdfUrl: string;
}

Modal.setAppElement("#root"); // Ensure accessibility

export default function PDFViewer({ pdfUrl }: PDFViewerProps) {
  const [zoom, setZoom] = useState<number>(1);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(true); // Default to fullscreen

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.25, 3));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.25, 0.5));
  const handleResetZoom = () => setZoom(1);
  const toggleFullscreen = () => setIsFullscreen(!isFullscreen);

  return (
    <>
      <Button variant="default" size="sm" onClick={() => setIsOpen(true)}>
        View PDF
      </Button>

      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        className="fixed inset-0 bg-white"
        overlayClassName="fixed inset-0"
      >
        {/* Floating Controls */}
        <div className="absolute top-4 right-4 flex gap-2 z-10 bg-white/90 rounded-md p-1 shadow-sm">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={toggleFullscreen}
            className="text-gray-700 hover:bg-gray-100 h-8 w-8 p-0"
          >
            {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={handleZoomOut} 
            disabled={zoom <= 0.5}
            className="text-gray-700 hover:bg-gray-100 h-8 w-8 p-0"
          >
            <ZoomOut className="h-4 w-4" />
          </Button>
          <div className="flex items-center px-2 text-sm text-gray-700">
            {Math.round(zoom * 100)}%
          </div>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={handleZoomIn} 
            disabled={zoom >= 3}
            className="text-gray-700 hover:bg-gray-100 h-8 w-8 p-0"
          >
            <ZoomIn className="h-4 w-4" />
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setIsOpen(false)}
            className="text-red-600 hover:bg-red-100 h-8 w-8 p-0"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* PDF Display - Full Viewport */}
        <div className="w-full h-[100vh]">
          <iframe
            src={`${pdfUrl}#toolbar=0&zoom=${zoom}`}
            title="PDF Viewer"
            className="w-full h-full"
            allowFullScreen
          />
        </div>
      </Modal>
    </>
  );
}