import { Component, NgModule,OnInit } from '@angular/core';
import { Office } from '../office';
import { FormBuilder, FormGroup,FormsModule, Validators } from '@angular/forms';
import { OfficeService } from '../office.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-updatedetails',
  templateUrl: './updatedetails.component.html',
  styleUrls: ['./updatedetails.component.css']
})
export class UpdatedetailsComponent implements OnInit {
  officeForm: FormGroup;
  // office: Office = new Office();
  office:Office=new Office();
  id: number;

  constructor(
    private officeService: OfficeService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getOfficeById(this.id);
    this.initializeForm();
  }

  initializeForm(): void {
    this.officeForm = this.fb.group({
      name: [this.office.name, Validators.required],
      no_of_employee: [this.office.no_of_employee, Validators.required],
      location: [this.office.location, Validators.required],
      office_type: [this.office.office_type, Validators.required]
    });
  }

  getOfficeById(id: number): void {
    this.officeService.getById(id).subscribe((response: Office) => {
      this.office = response;
      // Initialize the form with retrieved values
      this.initializeForm();
    });
  }

  onUpdate(): void {
    // Update the 'office' object with form values before sending it to the service
    this.office = { ...this.office, ...this.officeForm.value };
  
    this.officeService.updateOffice(this.id, this.office).subscribe(
      () => {
        console.log('Office updated successfully.');
        this.router.navigate(['view-list']);
      },
      (error) => {
        console.error('Error updating office:', error);
        // Handle error, e.g., display an error message to the user
      }
    );
  }
  

  goBack(): void {
    this.router.navigate(['view-list']);
  }

}
