import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database-deprecated';

@Injectable()
export class TargetListService {

  targetList: AngularFireList<any[]>;
  targets: Observable<any>;

  constructor(private http: Http,
    private _angularFire: AngularFireDatabase) {

    this.targetList = _angularFire.list('targets');

    this.targets = this.targetList.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }

  getTheTargetList() {
    return this.targets;
  }

  addTarget(newTarget) {
    this.targetList.push(newTarget);
  }

  updateTarget(key, updateTarget) {
    this.targetList.update(key, updateTarget);
  }

  deleteTarget(key) {
    this.targetList.remove(key);
  }
}