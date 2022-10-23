import { Component, Input, OnInit } from '@angular/core';
import { HeroesService } from '../../service/heroes.service';
import { Heroes } from '../../interface/heroes.interface';
import { HeroeComponent } from '../../pages/heroe/heroe.component';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe!: Heroes;

  ngOnInit(): void {
  }

}
