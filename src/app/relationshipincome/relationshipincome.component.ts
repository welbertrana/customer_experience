import { Component, OnInit, Output } from '@angular/core';
import { CustomerServiceService } from "../services/customer-service.service";
@Component({
  selector: 'app-relationshipincome',
  templateUrl: './relationshipincome.component.html',
  styleUrls: ['./relationshipincome.component.scss']
})
export class RelationshipincomeComponent implements OnInit {
  public pageName = 'Relationship Income';
  public headers = [];
  private data;
  public dataLoaded: boolean = false;
  public selectedChild: string = "";
  tableHeaders = ['Category', 'Revenue', '2020 ROE', 'Revenue', 'YTD ROE', 'Revenue', '2021 ROE', 'Revenue', '2022 ROE', 'Revenue', 'Lifetime ROE'];

  constructor(
    public csService: CustomerServiceService 
  ) { }

  ngOnInit(): void {
    this.csService.GetHeaders().subscribe(res => {
        this.headers = res;
    });
    this.csService.GetPageModel().subscribe(res => {
        this.data = res;
        if(this.data != []) {
          this.dataLoaded = true;
        }
    });
  }

  entityChange($event) {
    if (!(/\r|\n/.exec($event.target.outerText))) {
      this.selectedChild = $event.target.outerText;
      alert($event.target.outerText);
    }
  }
}
