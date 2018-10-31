import { Component, OnInit } from '@angular/core';
import { SkillRequest } from 'src/app/model/skill-request';
import { SkillTraceService } from 'src/app/service/skill-trace.service';

@Component({
  selector: 'app-employee-requests',
  templateUrl: './employee-requests.component.html',
  styleUrls: ['./employee-requests.component.css']
})
export class EmployeeRequestsComponent implements OnInit {

  request: SkillRequest[];
  constructor(private requestService:SkillTraceService) { }

  ngOnInit() {
    this.requestService.getAllRequests().subscribe(
      (data) => this.request = data
    );
    }

}
