import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { SectionImagesComponent } from '../../components/section-images/section-images.component';

@Component({
  selector: 'app-pistas-indoor-pages',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,SectionImagesComponent],
  templateUrl: './pistas-indoor-pages.component.html',
  styleUrl: './pistas-indoor-pages.component.css'
})
export class PistasIndoorPagesComponent {

}
