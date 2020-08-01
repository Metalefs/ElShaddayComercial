import { Component, OnInit } from '@angular/core';

import { Collections } from '../shared/_models/MongoCollections';
import { SobreService } from '../api/services/SobreService';
import { InformacoesContatoService } from '../api/services/InformacoesContatoService';
import { PrecoMarmitexService } from '../api/services/PrecoMarmitexService';
import { AuthenticationService } from 'src/app/api/authentication/authentication.service';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  loading = false;
  Sobre:Collections.Sobre;
  InformacaoContato:Collections.InformacoesContato;
  PrecoMarmitex:Collections.PrecoMarmitex;
  TotalMarmitasEntregues: number;
  currentUser: Collections.Cliente;
  constructor(private SobreService: SobreService, 
    private InfoContatoService: InformacoesContatoService,
    private PrecoMarmitexService : PrecoMarmitexService,
    private authenticationService: AuthenticationService
    ) { 
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
     }

  async LerSobre(){
    this.SobreService.Ler().subscribe(data=>{
      this.Sobre = data[0];
    });
  }

  async LerInfoContato(){
    this.InfoContatoService.Ler().subscribe(data=>{
      this.InformacaoContato = data[0];
    });
  }

  async LerPrecoMarmitex(){
    this.PrecoMarmitexService.Ler().subscribe(data=>{
      this.PrecoMarmitex = data[0];
      this.loading = false;
    });
  }

  ngOnInit(): void {
    this.TotalMarmitasEntregues = 300;
    this.loading = true;
    this.LerSobre();
    this.LerInfoContato();
    this.LerPrecoMarmitex();
    // VARIABLES
    const magicalUnderlines = Array.from(document.querySelectorAll('.underline--magical'));

    const gradientAPI = 'https://gist.githubusercontent.com/wking-io/3e116c0e5675c8bcad8b5a6dc6ca5344/raw/4e783ce3ad0bcd98811c6531e40256b8feeb8fc8/gradient.json';

    // HELPER FUNCTIONS

    // 1. Get random number in range. Used to get random index from array.
    const randNumInRange = max => Math.floor(Math.random() * (max - 1));

    // 2. Merge two separate array values at the same index to 
    // be the same value in new array.
    const mergeArrays = (arrOne, arrTwo) => arrOne.
    map((item, i) => `${item} ${arrTwo[i]}`).
    join(', ');

    // 3. Curried function to add a background to array of elms
    const addBackground = elms => color => {
      elms.forEach(el => {
        el.style.backgroundImage = color;
      });
    };
    // 4. Function to get data from API
    const getData = async url => {
      const response = await fetch(url);
      const data = await response.json();
      return data.data;
    };

    // 5. Partial Application of addBackground to always apply 
    // background to the magicalUnderlines constant
    const addBackgroundToUnderlines = addBackground(magicalUnderlines);

    // GRADIENT FUNCTIONS

    // 1. Build CSS formatted linear-gradient from API data
    const buildGradient = obj => `linear-gradient(${obj.direction}, ${mergeArrays(obj.colors, obj.positions)})`;

    // 2. Get single gradient from data pulled in array and
    // apply single gradient to a callback function
    const applyGradient = async (url, callback) => {
      const data = await getData(url);
      const gradient = buildGradient(data[randNumInRange(data.length)]);
      callback(gradient);
    };

    // RESULT
    applyGradient(gradientAPI, addBackgroundToUnderlines);
  }

}
