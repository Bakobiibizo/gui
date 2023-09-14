import { Component, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnChanges {

  @Input() imageData!: string;
  imageSrc!: SafeUrl;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    if (changes['imageData']) {
      this.updateImageSrc();
    }
  }

  private updateImageSrc() {
    this.imageSrc = this.sanitizer.bypassSecurityTrustUrl('data:image/jpeg;base64,' + this.imageData);
  }
}
