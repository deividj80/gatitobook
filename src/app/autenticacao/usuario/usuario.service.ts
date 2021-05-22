import { Injectable } from '@angular/core';
import { TokenService } from '../token.service';
import jwt_decode from 'jwt-decode';
import { Usuario } from './usuario';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private usuarioSubject = new BehaviorSubject<Usuario>({});

  constructor( private tokenService: TokenService) {
    if (this.tokenService.possuiToken()){
      this.decodificaJWT();
    }
  }

  private decodificaJWT(): any{
    const token = this.tokenService.retornaToken();
    const usuario = jwt_decode(token) as Usuario;
    this.usuarioSubject.next(usuario);
  }

  retornaUsuario(): any{
    return this.usuarioSubject.asObservable();
  }

  salvarToken( token: string ): void{
    this.tokenService.salvarToken(token);
    this.decodificaJWT();
  }

  logout(): void{
    this.tokenService.excluirToken();
    this.usuarioSubject.next({});
  }

  estalogado(): any{
    return this.tokenService.possuiToken();
  }

}
