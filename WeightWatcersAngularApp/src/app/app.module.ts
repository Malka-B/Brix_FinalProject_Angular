import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RegisterComponent } from './register/register.component';
import { CardComponent } from './card/card.component';
import { MatNativeDateModule } from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator'
import {MatTableModule} from '@angular/material/table'
import { MatSortModule } from '@angular/material/sort';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,WelcomeComponent, RegisterComponent, CardComponent   
  ],
  imports: [
    BrowserModule,
    MatSliderModule,
    MatDatepickerModule,
    AppRoutingModule,
    HttpClientModule,    
    RouterModule.forRoot([
      {path: 'welcome', component: WelcomeComponent},
      {path: 'register', component: RegisterComponent},   
      {path: 'card/:cardId', component: CardComponent},   
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),       
    BrowserAnimationsModule,
    ReactiveFormsModule,    
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule, 
    MatNativeDateModule,    
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,     
    MatIconModule
   
  ],  
  bootstrap: [AppComponent],
  exports: [MatDatepickerModule]
})
export class AppModule { }
