import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { FormComponent } from '../../components/form/form.component';

@Component({
  selector: 'app-sign-in-up-pages',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,FormComponent],
  templateUrl: './sign-in-up-pages.component.html',
  styleUrl: './sign-in-up-pages.component.css'
})
export class SignInUpPagesComponent {

 
}
