import { Routes, RouterModule } from '@angular/router';

import { TargetsComponent } from './targets/targets.component';
import { AddEditTargetComponent } from './add-edit-target/add-edit-target.component';

const appRoutes: Routes = [
    { path: "", redirectTo: 'targets', pathMatch: 'full' },
    { path: "targets", component: TargetsComponent },
    // { path: "target/add", component: AddEditTargetComponent },
    // { path: "target/edit/:id", component: AddEditTargetComponent },
    // otherwise redirect to home
    { path: "**", redirectTo: "" },
];

export const routing = RouterModule.forRoot(appRoutes);