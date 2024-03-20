import { EstadisticaUsuario } from './../../interface/EstadisticaUsuario';
import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { EstadisticaUsuarioService } from '../../services/estadistica-usuario.service';
@Component({
  selector: 'app-page-usuario',
  standalone: true,
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './page-usuario.component.html',
  styleUrl: './page-usuario.component.css'
})
export class PageUsuarioComponent {
  posibilidadEditar :boolean = false;


}
