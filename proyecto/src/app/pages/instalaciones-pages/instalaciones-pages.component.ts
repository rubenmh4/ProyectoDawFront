import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { Storage, ref, uploadBytes, listAll, getDownloadURL } from '@angular/fire/storage'
import { FooterComponent } from '../../components/footer/footer.component';


@Component({
  selector: 'app-instalaciones-pages',
  standalone: true,
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './instalaciones-pages.component.html',
  styleUrl: './instalaciones-pages.component.css'
})
export class InstalacionesPagesComponent {
  
}
