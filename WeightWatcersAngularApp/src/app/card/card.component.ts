import { Component, OnInit, ViewChild } from '@angular/core';
import { ICardModel } from '../Models/ICardModel.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { IPaginationModel } from '../Models/IPaginationModel';
import { AppService } from '../app.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  card: ICardModel;
  cardId: number;
  welcome: string = 'Welcome';

  public paginationModel: IPaginationModel = new IPaginationModel();

  constructor(private _appService: AppService, private _acr: ActivatedRoute) { }

  ngOnInit(): void {
    this._acr.paramMap.subscribe(params => {
      this.cardId = +params.get("cardId");
    });

    if (this.cardId) {
      debugger;
      this._appService.getCard(this.cardId).subscribe({
        next: card => {
          this.welcome+= ` ${card.firstName} ${card.lastName}`
          this.card = card;
          
        },
        error: err => console.log(err)
      }
      );
    }


  }
  edit() {

  }

  save() {

  }
}
