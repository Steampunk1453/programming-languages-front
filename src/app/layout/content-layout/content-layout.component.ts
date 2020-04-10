import { Component, OnInit } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-content-layout',
  templateUrl: './content-layout.component.html',
  styleUrls: ['./content-layout.component.scss']
})
export class ContentLayoutComponent implements OnInit {
  private overlayContainer: OverlayContainer;
  public theme = 'my-light-theme';

  constructor() {}

  ngOnInit() {
    if (this.overlayContainer) {
      this.overlayContainer.getContainerElement().classList.add(this.theme);
    }
  }
}
