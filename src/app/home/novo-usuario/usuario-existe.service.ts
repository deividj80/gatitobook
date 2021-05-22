import { Injectable } from '@angular/core';
import { NovoUsuarioService } from './novo-usuario.service';
import { AbstractControl } from '@angular/forms';
import { first, map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioExisteService {

  constructor( private novoUsuarioService: NovoUsuarioService) { }

  usuarioJaExiste(): any {
    return (control: AbstractControl ) => {
      return control.valueChanges.pipe(
        switchMap( (nomeUsuario) =>
          this.novoUsuarioService.verificaUsuarioExistente(nomeUsuario)
        ),
        map((usuarioExiste) => (usuarioExiste ? { usuarioExistente: true} : null)
        ),
        first()
      );
    };
  }
}