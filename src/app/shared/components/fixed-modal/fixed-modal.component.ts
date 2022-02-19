import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-fixed-modal',
  templateUrl: './fixed-modal.component.html',
  styleUrls: ['./fixed-modal.component.scss']
})
export class FixedModalComponent implements OnInit {

  public CharacterName: string = '';

  public CharacterStatus: string = '';

  public CharacterOrigin: string = '';

  public CharacterImage: string = '';

  public CharacterSpecies: string = '';

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.get('2')
      .subscribe((data: any) => {
        this.CharacterName = data.name;
        this.CharacterStatus = data.status;
        this.CharacterOrigin = data.origin.name;
        this.CharacterImage = data.image;
        this.CharacterSpecies = data.species;
      }
      )
  }

}
