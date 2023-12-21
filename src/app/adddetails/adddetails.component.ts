import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OfficeService } from '../office.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adddetails',
  templateUrl: './adddetails.component.html',
  styleUrls: ['./adddetails.component.css']
})
export class AdddetailsComponent implements OnInit {
  employeeForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private officeService: OfficeService  // Inject the OfficeService
  ) {}

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      name: ['', [Validators.required]],
      no_of_employee: ['', [Validators.required, Validators.min(0)]],
      location: ['', [Validators.required]],
      office_type: ['', [Validators.required]],
    });
  }

  goBack(): void {
    this.router.navigate(['view-list']);
  }

  onSubmit(): void {
    if (this.employeeForm.valid) {
      this.officeService.saveEmployee(this.employeeForm.value).subscribe(
        (response: any) => {  // Add a type for the response, adjust accordingly
          console.log('Form submitted successfully:', response);
          // Optionally, you can navigate or perform other actions after successful submission
          this.router.navigate(['view-list']);
        },
        (error: any) => {  // Add a type for the error, adjust accordingly
          console.error('Error submitting form:', error);
        }
      );
    } else {
      console.log('Form is invalid. Please fill in all required fields.');
    }
  }
}

