import { Component, OnInit } from '@angular/core';
import { Office } from '../office';
import { OfficeService } from '../office.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.css']
})
export class ViewListComponent implements OnInit {
  offices: any[];

  constructor(private officeService: OfficeService,private router:Router) {}

  ngOnInit(): void {
    this.fetchOfficeList();
  }

  fetchOfficeList(): void {
    this.officeService.getOfficeList().subscribe(
      (data) => {
        this.offices = data;
      },
      (error) => {
        console.error('Error fetching office list:', error);
      }
    );
  }
  viewOffice(officeId: number): void {
    this.router.navigate(['getdetails', officeId]);
    }

    updateOffice(officeId: number): void {
      this.router.navigate(['updatedetails', officeId]);
    }
    loadOffices():void{
      this.officeService.getAllOffices().subscribe(
        (data)=>{
          this.offices=data;
        },
        (error)=>{
          console.error(error);
        }
      );
    }
    loadData(): void {
      this.officeService.getOfficeList().subscribe(
        data => {
          this.offices = data;
        },
        error => {
          console.error('Error loading offices:', error);
        }
      );
    }
    
    onDeleteClick(id: number): void {
      this.officeService.deleteOffice(id).subscribe(
        () => {
          // Update your UI after successful delete
          this.loadData();  // Reload the data after delete
        },
        error => {
          console.error('Error deleting office:', error);
          // Handle error if needed
        }
      );
    }
    
    
    goToAddDetails(): void {
      this.router.navigate(['adddetails']);
    }
}
