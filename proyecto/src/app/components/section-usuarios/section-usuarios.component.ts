import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../interface/Usuario';
import { UsuarioServiceService } from '../../services/usuario-service.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-section-usuarios',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './section-usuarios.component.html',
  styleUrl: './section-usuarios.component.css'
})
export class SectionUsuariosComponent implements OnInit{

  usuarios : Usuario[] = []

  constructor(private usuarioService : UsuarioServiceService){

    
  }
    ngOnInit(): void {
      this.usuarioService.buscarUsuarios().subscribe((res)=> {
        this.usuarios = res;
      })
  }
  
  
  

}
