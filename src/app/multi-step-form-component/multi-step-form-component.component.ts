import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';
import { SubmitInformationService } from '../services/submit-information.service';
import {PersonalInformationComponent} from '../components/personal-information/personal-information.component';
import {UploadDocumentComponent} from '../components/upload-document/upload-document.component';
import {ContactInformationComponent} from '../components/contact-information/contact-information.component';
import {ReviewComponent} from '../components/review/review.component';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-multi-step-form',
  standalone: true,
  templateUrl: './multi-step-form-component.component.html',
  styleUrls: ['./multi-step-form-component.component.css'],
  imports: [
    PersonalInformationComponent,
    UploadDocumentComponent,
    ContactInformationComponent,
    ReviewComponent,
    CommonModule
  ],
})
export class MultiStepFormComponent implements OnInit {

  currentStep: number = 1;
  formData: any = {
    personalInfo: {},
    document: null,
    contactInfo: {},
  };

  constructor(
    private localStorageService: LocalStorageService,
    private submitInformationService: SubmitInformationService
  ) {}

  ngOnInit() {
    const savedData = JSON.parse(localStorage.getItem('formData') || '{}');
    // Ensure that savedData is not null or undefined
    if (savedData) {
      this.formData = savedData.formData || {};
      this.currentStep = savedData.currentStep || 1;  // Default to step 1 if not found
    }
  }

  saveFormData() {
    this.localStorageService.saveData('formData', {
      formData: this.formData,
      currentStep: this.currentStep,
    });
  }

  nextStep() {
    if (this.currentStep < 4) this.currentStep++;
    this.saveFormData();
  }

  previousStep() {
    if (this.currentStep > 1) this.currentStep--;
    this.saveFormData();
  }

  onSubmit() {
    this.submitInformationService.submitForm(this.formData).subscribe(
      (response) => {
        console.log('Data submitted successfully', response);
        this.localStorageService.removeData('formData');
      },
      (error) => console.error('Submission failed', error)
    );
  }
}
