import { Component, ViewContainerRef } from '@angular/core';
import { LoaderService, ILoader } from './_services/loader.service';
import { ToasterService } from './_services/toaster.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  public loader: ILoader;
  constructor(
    private loaderService: LoaderService,
    public toaster: ToasterService,
    vRef: ViewContainerRef
  ) {
    this.toaster.toastr.setRootViewContainerRef(vRef);
    this.loader = loaderService.loader;
    loaderService.loaderEvent.subscribe((data: boolean) => { ; this.loader.isLoading = data })
  }

}
