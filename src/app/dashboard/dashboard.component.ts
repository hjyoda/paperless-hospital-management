import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  claimForm: FormGroup;
  claimSubmitted: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this.claimForm = this.formBuilder.group({
      genderType: ['', Validators.required],
      patientName: ['', Validators.required],
      patientAge: ['', Validators.required],
      patientBloodGroup: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      addressDetails: ['', Validators.required],
      diseaseDetails: ['', Validators.required],
      allergyDetails: ['', Validators.required]
    });
  }

  submitClaim() {
    if (this.claimForm.valid) {
      // Submit claim form data to backend
      console.log(this.claimForm.value);
      this.claimSubmitted = true;
    } else {
      // Form validation failed
      alert('Please fill out all required fields.');
    }
  }
}
