import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html'
})
export class SearchComponentComponent implements OnInit{

  heroes:any[] = [];
  termino:string;

  constructor(  private _heroesService: HeroesService,
                private activatedRouter: ActivatedRoute                ) {

  }

  ngOnInit(){
    this.activatedRouter.params.subscribe(params => {
    this.termino = params['termino']
    this.heroes = this._heroesService.buscarHeroes(params['termino']);
    console.log(this.heroes)
  })
  }

}
