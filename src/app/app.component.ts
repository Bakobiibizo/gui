import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'image-gen-gui';

  constructor(private apiService: ApiService) {
    this.testApiService();
  }

  testApiService() {
    this.apiService.sendPrompt('testprompt').subscribe((response) => {
      console.log(response);
    });
  }
}
