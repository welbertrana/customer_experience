import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-entity-filter',
  templateUrl: './entity-filter.component.html',
  styleUrls: ['./entity-filter.component.scss']
})
export class EntityFilterComponent implements OnInit {
  @Input() relationship: { id: string, name: string, children: Object[]} = {
    id: "",
    name: "",
    children: []
  }; 
  @Input() selectedChild: string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
