import { EstadisticaUsuario } from './../../interface/EstadisticaUsuario';
import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { EstadisticaUsuarioService } from '../../services/estadistica-usuario.service';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-page-usuario',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,RouterLink],
  templateUrl: './page-usuario.component.html',
  styleUrl: './page-usuario.component.css'
})
export class PageUsuarioComponent {
  posibilidadEditar :boolean = true;

   usuario : {nombre:string,apellidos:string,lugarNac:string,fechaNac:number, email:string} = {
    nombre : "Ruben",
    apellidos : "Morón Hinojosa",
    lugarNac : "Osuna",
    fechaNac : 1,
    email : "r.moronhinojosa@gmail.com"
  }

}
