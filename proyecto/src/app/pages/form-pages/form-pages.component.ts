import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-form-pages',
  standalone: true,
  imports: [HeaderComponent,
  FooterComponent],
  templateUrl: './form-pages.component.html',
  styleUrl: './form-pages.component.css'
})
export class FormPagesComponent {

}
