import {Component, OnInit} from '@angular/core';
import {Horario} from "../../model/horario";
import {ActivatedRoute, Router} from "@angular/router";
import {HorarioService} from "../../shared/horario.service";

@Component({
  selector: 'app-horario-list',
  templateUrl: './horario-list.component.html',
  styleUrls: ['./horario-list.component.css']
})
export class HorarioListComponent implements OnInit{
  horarios : Horario[] | undefined

  constructor(private horarioService: HorarioService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.horarioService.findAll().subscribe(horarios => this.horarios = horarios);
  }

  addHorario() {
    this.router.navigate(['/horario/add']);
  }
}
