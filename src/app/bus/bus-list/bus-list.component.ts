import {Component, OnInit} from '@angular/core';
import {Bus} from "../../model/bus";
import {BusService} from "../../shared/bus.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-bus-list',
  templateUrl: './bus-list.component.html',
  styleUrls: ['./bus-list.component.css']
})
export class BusListComponent implements OnInit{

  buses : Bus[] | undefined

  constructor(private busService: BusService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.busService.findAll().subscribe(buses => this.buses = buses);
  }


  verBus(bus:Bus){
    this.router.navigate(['/bus/view', bus.id]);
  }
}
