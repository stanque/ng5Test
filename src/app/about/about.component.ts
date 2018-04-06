import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  routeId: number = 0;
  items: any;

  constructor(private route: ActivatedRoute, private router: Router, private _data: DataService) 
  { 
    this.route.params.subscribe(res => this.routeId = res.id);
  }

  ngOnInit() {
    this._data.item.subscribe(res => this.items = res);
  }

  goHome() {
    this.router.navigate(['home']);
  }
}
