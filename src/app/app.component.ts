import { Component } from '@angular/core';
import {MultiStepFormComponent} from './multi-step-form-component/multi-step-form-component.component';
import {HttpClientModule} from '@angular/common/http';
import {SubmitInformationService} from './services/submit-information.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MultiStepFormComponent,
    HttpClientModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[SubmitInformationService]
})
export class AppComponent {
  title = 'MultiStepFormApp';
}
