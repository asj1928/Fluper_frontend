import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [FooterComponent, NavbarComponent],
  imports: [
    CommonModule,

  ],
  exports: [FooterComponent, NavbarComponent]

})
export class ComponentsModule { }
