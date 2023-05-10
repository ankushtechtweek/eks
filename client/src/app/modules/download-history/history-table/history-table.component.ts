import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as saveAs from 'file-saver';
import Swal from 'sweetalert2';
import { ApplicationService } from '../../shared/services/application/application.service';
import { LoaderService } from '../../shared/services/loader/loader.service';

@Component({
  selector: 'app-history-table',
  templateUrl: './history-table.component.html',
})
export class HistoryTableComponent {
  @Input() public loadingIndicator = false;
  @Input() public noResultFound = false;
  @Input() public searches: any = {
    items: [],
    currentPage: null,
    pageCount: null,
    pageSize: null,
    rowCount: 0,
  };
  @Output() page: EventEmitter<any> = new EventEmitter();
  public pager = {
    itemsPerPage: 8,
    currentPage: 1,
    search: '',
    sortDirection: 2,
    sortColumn: 'createdDate',
    searchValue: '',
  };
  constructor(
    private appService: ApplicationService,
    private loaderService: LoaderService
  ) {}

  public setPage(pageNumber: number) {
    this.pager.currentPage = pageNumber;
    this.page.emit(this.pager);
  }

  public rowSelect(row: any): void {
    if (row.type === 'click') {
      console.log(row.row, 'row');
    }
  }

  public getRowHeight(row: any) {
    return row.height;
  }

  public async download(item: any) {
    try {
      const result = await this.appService.getReportPDF(item.pdfFileName);
      if (result.statusCode === 100) {
        this.downloadPDF(result.result, this.fullAddress(item, item.orderType));
      } else {
        this.errorAlert(result.statusMessage);
      }
    } catch (e) {
      this.errorAlert(this.getErrorMessage(e));
    }
  }

  private fullAddress(row: any, orderType: string) {
    return `${row.appApplications.propertyAddressNavigation?.street}, ${
      row.appApplications.propertyAddressNavigation?.state?.abbreviation
    } ${row.appApplications.propertyAddressNavigation?.zipCode}-${
      orderType === 'Standard' ? 'report' : orderType
    }`;
  }

  public reportName(report: string) {
    switch (report) {
      case 'Standard':
        return 'Rapid Insights';
      case 'Lien':
        return 'Preliminary Title Report (Includes liens)';
      default:
        return report;
    }
  }

  private async downloadPDF(url: string, fileName: string) {
    this.loaderService.show();
    const result = await this.appService.getBlobFromURL(url);
    const blob = new Blob([result], { type: 'application/pdf' });
    saveAs(blob, fileName + '.pdf');
    this.loaderService.hide();
  }

  private getErrorMessage(error: unknown) {
    if (error instanceof Error) return error.message;
    return String(error);
  }

  private errorAlert(message: string) {
    Swal.fire({
      icon: 'error',
      text: message,
    });
  }
}
