import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  @Output() settingsChange = new EventEmitter();

  cfgControl = new FormControl(7);
  denoiseControl = new FormControl(90);
  styleControl = new FormControl('normal');
  modelControl = new FormControl('v1-5-pruned-emaonly.ckpt');
  numberControl = new FormControl(1);

  styles: string[] = [];
  models: string[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<string[]>('/api/styles').subscribe((styles: string[]) => {
      this.styles = styles;
    });
    this.http.get<string[]>('/api/models').subscribe((models: string[]) => {
      this.models = models;
    });
  }

  onSettingsChange() {
    this.settingsChange.emit({
      cfg: this.cfgControl.value,
      denoise: this.denoiseControl.value,
      style: this.styleControl.value,
      model: this.modelControl.value,
      number: this.numberControl.value
    });
  }
}
