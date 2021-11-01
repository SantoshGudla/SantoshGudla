﻿import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { User } from '../models/user.models';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`${environment.apiUrl}/users`);
    }
    getCompanies() {
        return this.http.get<User[]>(`${environment.apiUrl}/companies`);
    }
    getContacts() {
        return this.http.get<User[]>(`${environment.apiUrl}/contacts`);
    }
    getData() {
        return this.http.get<User[]>(`${environment.apiUrl}/db`);
    }
}