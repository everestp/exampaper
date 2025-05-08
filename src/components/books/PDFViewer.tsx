
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface PDFViewerProps {
  pdfUrl: string;
}

export default function PDFViewer({ pdfUrl }: PDFViewerProps) {
  const [zoom, setZoom] = useState<number>(1);
  
  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 0.25, 2));
  };
  
  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 0.25, 0.5));
  };
  
  const handleResetZoom = () => {
    setZoom(1);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="border-b p-2 flex justify-between items-center bg-muted/50">
        <div className="text-sm">PDF Viewer</div>
        <div className="flex items-center gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleZoomOut}
            disabled={zoom <= 0.5}
          >
            -
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleResetZoom}
          >
            {Math.round(zoom * 100)}%
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleZoomIn}
            disabled={zoom >= 2}
          >
            +
          </Button>
        </div>
      </div>
      <div className="flex-1 overflow-auto bg-muted/30">
        <iframe
          src={`${pdfUrl}#toolbar=0&zoom=${zoom}`}
          title="PDF Viewer"
          className="w-full h-full border-none"
        />
      </div>
    </div>
  );
}
