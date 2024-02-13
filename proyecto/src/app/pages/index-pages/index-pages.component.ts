import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { SliderComponent } from '../../components/slider/slider.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { SectionInfoIndexComponent } from '../../components/section-info-index/section-info-index.component';

@Component({
  selector: 'app-index-pages',
  standalone: true,
  imports: [HeaderComponent,
    SliderComponent,
    SectionInfoIndexComponent,
    FooterComponent],
  templateUrl: './index-pages.component.html',
  styleUrl: './index-pages.component.css'
})
export class IndexPagesComponent {

}
