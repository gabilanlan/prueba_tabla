
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { NgbdModalFocus, NgbdModalConfirm, NgbdModalConfirmAutofocus } from './modal-focus';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule, NgbModule],
  declarations: [AppComponent, NgbdModalFocus, NgbdModalConfirm, NgbdModalConfirmAutofocus],
  entryComponents: [NgbdModalConfirm, NgbdModalConfirmAutofocus],
  bootstrap: [AppComponent]
})
export class AppModule {}
