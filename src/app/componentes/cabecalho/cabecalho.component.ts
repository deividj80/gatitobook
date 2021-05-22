import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/autenticacao/usuario/usuario.service';
import { Observable } from 'rxjs';
import { Usuario } from '../../autenticacao/usuario/usuario';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css'],
})
export class CabecalhoComponent {

  user$: Observable<Usuario> = this.usuarioService.retornaUsuario();

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  logout() {
    this.usuarioService.logout();
    this.router.navigate(['']);
  }
}
