import { Component, Input, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroes } from '../../interface/heroes.interface';
import { HeroesService } from '../../service/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css'],
})
export class BuscarComponent implements OnInit {
  termino: string = '';
  heroes: Heroes[] = [];
  heroeSeleccionado: Heroes | undefined;

  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {}

  buscar() {
    this.heroesService
      .getSugerencia(this.termino.trim())
      .subscribe((heroes) => (this.heroes = heroes));
  }

  opcion(event: MatAutocompleteSelectedEvent) {
    if (!event.option.value) {
      this.heroeSeleccionado = undefined;
      return;
    }

    const heroe: Heroes = event.option.value;
    this.termino = heroe.superhero;

    this.heroesService
      .getHeroesId(heroe.id!)
      .subscribe((heroe) => (this.heroeSeleccionado = heroe));
  }
}
