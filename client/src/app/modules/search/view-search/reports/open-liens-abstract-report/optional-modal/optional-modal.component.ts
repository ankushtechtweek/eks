import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-optional-modal',
  templateUrl: './optional-modal.component.html',
})
export class OptionalModalComponent implements OnInit {
  public optionalForm!: FormGroup;
  @Output() optionalFields: EventEmitter<any> = new EventEmitter();
  constructor(public activeModal: NgbActiveModal, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initOptionalForm();
  }

  private initOptionalForm() {
    this.optionalForm = this.fb.group({
      ownerName: [''],
      refId: [''],
    });
  }
  public proceedWithDownload() {
    this.optionalFields.emit(this.optionalForm.value);
    this.activeModal.close();
  }
}
