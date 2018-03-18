import { Component, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { LoaderService, ILoader } from '../_services/loader.service';
import { TargetListService } from '../_services/targetList.service';
import { Targets } from '../_models/targets';

import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { ToasterService } from '../_services/toaster.service';

import { AddEditTargetComponent } from '../add-edit-target/add-edit-target.component';
import { ChartComponent } from '../chart/chart.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-targets',
  templateUrl: './targets.component.html'
})
export class TargetsComponent implements OnInit {

  public items: Array<string> = ['Approved', 'Declined', 'Pending Approval', 'Researching'];

  bsModalRef: BsModalRef;
  target: Targets = {
    name: "",
    address: "",
    website: "",
    keyContacts: "",
    currentFinancialGrowth: "",
    status: ""
  };

  targetList: Observable<any[]>;
  deleteKey: string;

  public targetKey: string;

  loader: ILoader;
  constructor(private _modalService: BsModalService,
    private _targetListService: TargetListService,
    private loaderService: LoaderService,
    public toaster: ToasterService,
    vcr: ViewContainerRef) {

  }

  ngOnInit() {

    this.loaderService.showLoader();
    this._targetListService.getTheTargetList()
      .subscribe((response) => {
        this.targetList = response;
        this.loaderService.hideLoader();
      });
  }


  //use promise
  add() {
    this.bsModalRef = this._modalService.show(AddEditTargetComponent);
  }

  openEditModal(key, item, editTarget: TemplateRef<any>) {
    this.targetKey = key;

    item.status = [`${item.status}`];
    const initialState = {
      target: {
        name: item.name,
        address: item.address,
        website: item.website,
        status: item.status,
        keyContacts: item.keyContacts,
        currentFinancialGrowth: item.currentFinancialGrowth
      },
      targetKey: this.targetKey
    };
    this.bsModalRef = this._modalService.show(AddEditTargetComponent, { initialState });
  }

  openDeleteModal(key, deleteTemplate: TemplateRef<any>) {
    this.deleteKey = key;
    this.bsModalRef = this._modalService.show(deleteTemplate, { class: 'modal-sm' });
  }

  confirmDelete() {
    this.bsModalRef.hide();
    this._targetListService.deleteTarget(this.deleteKey);
    this.toaster.showSuccess('Target deleted successfully!', 'Success!');
  }

  openChart() {
    this.bsModalRef = this._modalService.show(ChartComponent, { class: 'modal-lg' });
  }

  cancel() {
    this._modalService.hide(1);
  }

  decline() {
    this.bsModalRef.hide();
  }

  openLink(link) {
    window.open(link, "_blank");
  }

}
