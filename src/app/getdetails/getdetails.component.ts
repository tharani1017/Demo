import { Component, OnInit } from '@angular/core';
import { OfficeService } from '../office.service';
import { Office } from '../office';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-getdetails',
  templateUrl: './getdetails.component.html',
  styleUrls: ['./getdetails.component.css']
})
export class GetdetailsComponent implements OnInit {
  selectedOffice: Office | undefined;  // Ensure this line is correctly declared

  constructor(
    private officeService: OfficeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const officeId = Number(params.get('id'));
      this.officeService.getById(officeId).subscribe((data: Office) => {
        this.selectedOffice = data;
      });
    });
  }

  goHome(): void {
    this.router.navigate(['view-list']);
  }
}
