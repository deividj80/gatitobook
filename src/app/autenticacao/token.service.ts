import { Injectable } from '@angular/core';

const KEY = 'token';
@Injectable({
  providedIn: 'root'
})
export class TokenService {

  retornaToken(): any{
    return localStorage.getItem(KEY) ?? '';
  }

  salvarToken( token: string ): any{
    localStorage.setItem(KEY, token);
  }

  excluirToken(): any{
    localStorage.removeItem(KEY);
  }

  possuiToken(): any{
    return !! this.retornaToken();
  }

}
