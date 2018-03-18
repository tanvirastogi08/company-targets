import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { ToasterService } from '../_services/toaster.service';
import { TargetListService } from '../_services/targetList.service';
import { Targets } from '../_models/targets';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-add-edit-target',
  templateUrl: './add-edit-target.component.html',
  styleUrls: ['./add-edit-target.component.css']
})
export class AddEditTargetComponent implements OnInit {

  modalRef: BsModalRef;

  target: Targets = {
    name: "",
    address: "",
    website: "",
    keyContacts: "",
    currentFinancialGrowth: "",
    status: ""
  };

  private id: any;
  private targetName: any;
  private address: any;
  private keyContacts: any;
  private currentFinancialGrowth: any;
  private website: any;
  private currentStatus: string;

  private value: any = {};
  private _disabledV: string = '0';
  private disabled: boolean = false;
  private newStatus: string;

  title: string = "Add Target";
  public items: Array<string> = ['Approved', 'Declined', 'Pending Approval', 'Researching'];

  constructor(private _targetListService: TargetListService,
    public toaster: ToasterService,
    private _router: Router,
    private _modalService: BsModalService) {

  }

  ngOnInit() {
  }

  addTargets(newItem) {
    newItem.status = this.newStatus;
    this._targetListService.addTarget(newItem);
    this.resetForm();
    this._modalService.hide(1);
    this.toaster.showSuccess('Target added successfully!', 'Success!');
    this._router.navigate(['targets']);
  }

  updateTarget(targetKey, updateTarget) {

    if (this.newStatus) {
      updateTarget.status = this.newStatus;
    } else {
      updateTarget.status = updateTarget.status;
    }

    this._targetListService.updateTarget(targetKey, updateTarget);
    this._modalService.hide(1);
    this.toaster.showSuccess('Target updated successfully!', 'Success!');
    this._router.navigate(['targets']);
  }

  resetForm() {
    this.target = {
      name: "",
      address: "",
      website: "",
      keyContacts: "",
      currentFinancialGrowth: "",
      status: ""
    }
  }

  cancel() {
    this.resetForm();
    this._modalService.hide(1);
  }

  private get disabledV(): string {
    return this._disabledV;
  }

  private set disabledV(value: string) {
    this._disabledV = value;
    this.disabled = this._disabledV === '1';
  }

  public refreshValue(value: any): void {
    this.value = value;
  }

  public selected(value: any): void {
    this.newStatus = value.text;
  }

  public removed(value: any): void {
    this.newStatus = value.text;
  }

  public typed(value: any): void {
  }
}
