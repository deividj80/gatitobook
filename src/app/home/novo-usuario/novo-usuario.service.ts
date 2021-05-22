import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NovoUsuario } from './novo-usuario';

@Injectable({
  providedIn: 'root'
})
export class NovoUsuarioService {

  constructor( private http: HttpClient) { }

  cadastrarNovoUsuario( novoUsuario: NovoUsuario): any{
    return this.http.post('http://localhost:3000/user/signup', novoUsuario);
  }
  verificaUsuarioExistente( nomeUsuario: string): any{
    return this.http.get(`http://localhost:3000/user/exists/${nomeUsuario}`);
  }

}
