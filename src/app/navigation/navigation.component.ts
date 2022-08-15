import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @Input() activePage: string = "";
  public navbar = ['Dashboard', 'Relationship Income', 'Deals', 'Access', 'Details'];
  public navigation = {
    'Dashboard': 'dashboard',
    'Relationship Income': 'relationship-income',
    'Deals': 'deals',
    'Access': 'access',
    'Details': 'details'
  };
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToPage($event) {
    this.router.navigate([this.navigation[$event.target.outerText]]);
  }
}
