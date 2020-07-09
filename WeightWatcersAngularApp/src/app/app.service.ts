import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ILogin } from './Models/ILogin.model';
import { ISubscriberModel } from './Models/ISubscriberModel.model';
import { ICardModel } from './Models/ICardModel.model';

@Injectable({
  providedIn: 'root'
})

export class AppService {

  endpoint: string = 'http://localhost:57951/api/Subscriber/';

  constructor(private http: HttpClient) { }

  login(loginObject: ILogin): Observable<Number> {
    
    return this.http.post<number>(`${this.endpoint}login`, loginObject);

  }
  
  register(registeredSubscriber: ISubscriberModel): Observable<boolean> {
    
    return this.http.post<boolean>(`${this.endpoint}subscriber`, registeredSubscriber);

  }

  getCard(cardId: number): Observable<ICardModel> {    
    return this.http.get<ICardModel>(`${this.endpoint}card?id=${cardId}`);
  }
  
}
