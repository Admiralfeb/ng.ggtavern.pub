import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.scss']
})
export class MembershipComponent implements OnInit {

  price = 25.00;
  perks = [
    'Free entry to all events unless otherwise stated',
    '10% off all food and drink',
    'Quest lines - win stuff!',
    'Priority choice on consoles',
    '1/2 price VR. Free VR on Sundays',
    'Damage waiver only needs to be signed once a year',
    'No need to leave an ID to rent games'
  ];

  constructor() { }

  ngOnInit() {
  }

}
