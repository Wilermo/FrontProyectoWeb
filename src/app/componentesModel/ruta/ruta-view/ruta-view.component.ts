import {Component, OnInit} from '@angular/core';
import {BusService} from "../../../shared/bus.service";
import {ActivatedRoute, Router} from "@angular/router";
import {RutaService} from "../../../shared/ruta.service";
import {Ruta} from "../../../model/ruta";
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'app-ruta-view',
  templateUrl: './ruta-view.component.html',
  styleUrls: ['./ruta-view.component.css']
})
export class RutaViewComponent implements OnInit{

  constructor(private rutaService: RutaService,private route: ActivatedRoute,private router: Router) { }

  ruta : Ruta | undefined;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      console.log(params);
      console.log(params.get("id"));
    });

    this.route.paramMap.pipe(switchMap(params =>
        this.rutaService.findById(+params.get('id')!)

    )).subscribe(ruta=> this.ruta = ruta);

  }
  volver():void{
    this.router.navigate(['/ruta/list']);

  }

}
