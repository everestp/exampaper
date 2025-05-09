import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

// Set up PDF worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

interface PdfCompProps {
  pdfFile: string | File | null;
}

function PdfComp({ pdfFile }: PdfCompProps) {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber] = useState<number>(1); // You can implement page navigation if needed

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  if (!pdfFile) {
    return <div className="pdf-div">No PDF file selected</div>;
  }

  return (
    <div className="pdf-div">
      {numPages && (
        <p>
          Page {pageNumber} of {numPages}
        </p>
      )}
      
      <Document
        file={pdfFile}
        onLoadSuccess={onDocumentLoadSuccess}
        loading={<div>Loading PDF...</div>}
        error={<div>Failed to load PDF.</div>}
      >
        {Array.from(new Array(numPages || 0), (_, index) => (
          <Page
            key={`page_${index + 1}`}
            pageNumber={index + 1}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            width={800} // You can adjust this or make it responsive
            loading={<div>Loading page {index + 1}...</div>}
          />
        ))}
      </Document>
    </div>
  );
}

export default PdfComp;