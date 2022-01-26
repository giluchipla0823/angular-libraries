import { Injectable } from '@angular/core';

import * as api from 'proyecto-1b-api-github';

// const api: any = require('proyecto-1b-api-github');

import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class SearchUserService {

  constructor() { }

  getUser(username: string): Promise<any> {
    return new Promise((resolve, reject) => {
      api.obtenerDatosDeUsuario(username)
        .then((user: User) => {
          resolve(user);
        })
        .catch((err: any) => {
          reject(err);
        })
    });
  }
}
