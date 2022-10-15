import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';
import { UsuarioLogin } from '../model/UsuarioLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  entrar(usuarioLogin: UsuarioLogin): Observable<UsuarioLogin>
  {
    return this.http.post<UsuarioLogin>('https://blogpessoalback234.herokuapp.com/logar', usuarioLogin)
  }

  cadastrar(usuario: Usuario): Observable<Usuario>
  {
    return this.http.post<Usuario>('https://blogpessoalback234.herokuapp.com/cadastrar', usuario)
  }

  getByIdUser(id: number): Observable<Usuario>{
    return this.http.get<Usuario>(`https://blogpessoalback234.herokuapp.com/usuarios/${id}`)
  }

  logado()
  {
    let ok: boolean = false
    if (environment.token != '')
    {
      ok = true
    }
    return ok
  }
}