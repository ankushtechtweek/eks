import { Component, Input } from '@angular/core';
import { PDFDocumentProxy } from 'ng2-pdf-viewer';

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.scss'],
})
export class PdfViewerComponent {
  @Input() pdfURl!: string;
  public errorMessage!: string;
  isLoaded!: boolean;

  callBackFn(pdf: PDFDocumentProxy) {
    // do anything with "pdf"
    this.errorMessage = '';
    this.isLoaded = true;
    // this.downloadPdf.emit(this.pdfSrc)
  }

  onError(error: any) {
    // do anything
    this.isLoaded = true;
    this.errorMessage = error.message;
  }
}
