import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-prompt',
  templateUrl: './prompt.component.html',
  styleUrls: ['./prompt.component.css'],
})
export class PromptComponent {
  promptControl = new FormControl('');

  constructor(private apiService: ApiService) {}

  onSubmit() {
    const prompt = this.promptControl.value;
    this.apiService.sendPrompt(prompt!);
  }
}
