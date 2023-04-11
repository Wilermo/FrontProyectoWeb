import {Component, OnInit} from '@angular/core';
import {Bus} from "../../../model/bus";
import {BusService} from "../../../shared/bus.service";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-bus-view',
  templateUrl: './bus-view.component.html',
  styleUrls: ['./bus-view.component.css']
})
export class BusViewComponent implements OnInit {

  bus: Bus | undefined

  constructor(private busService: BusService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {

    this.route.paramMap.pipe(switchMap(params =>
        this.busService.findById(+params.get('id')!)
      // this.personService.findById(+(params.get('id') || 1))

    )).subscribe(bus => this.bus = bus);
  }
  volver():void{
    this.router.navigate(['/bus/list']);

  }



}
