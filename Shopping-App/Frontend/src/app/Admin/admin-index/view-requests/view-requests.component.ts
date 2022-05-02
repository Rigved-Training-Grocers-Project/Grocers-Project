import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Request } from 'src/app/model.request';
import { RequestService } from 'src/app/request.service';

@Component({
  selector: 'app-view-requests',
  templateUrl: './view-requests.component.html',
  styleUrls: ['./view-requests.component.css']
})
export class ViewRequestsComponent implements OnInit {
  resultMsg?: string;
  requests?: Array<Request>;
  constructor(public router: Router, public reqService: RequestService) { }

  ngOnInit(): void {
    this.reqService.retrieveAllRequests().subscribe(result => {
      this.requests = result;
    });
  
    setInterval(() => {
      this.updateTable();
      }, 30000);
  }
  updateTable(): any {
    this.reqService.retrieveAllRequests().subscribe(result => {
      if (this.requests?.length !== result.length) {
        this.requests = result;
 
      }
    });
  }

  deleteById(id: any): any{
    this.reqService.deleteRequestById(id).subscribe((result: string) => {
      this.resultMsg = result;
      this.updateTable();
    });

    setTimeout(() => this.resultMsg = '', 10000);
  }
}
