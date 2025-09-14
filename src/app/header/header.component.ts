import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  locations: string[] = [
    'Mumbai',
    'Delhi',
    'Bengaluru',
    'Hyderabad',
    'Chennai',
    'Kolkata',
    'Pune',
    'Ahmedabad',
    'Jaipur',
    'Lucknow',
    'Chandigarh',
    'Surat',
    'Indore',
    'Bhopal',
    'Nagpur',
    'Patna',
    'Visakhapatnam',
    'Kochi',
    'Goa',
    'Mysuru'
  ];

   // User input
  searchText: string = '';

   // Filtered results
  get filteredLocations(): string[] {
    if (!this.searchText) return [];
    return this.locations.filter(location =>
      location.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}
