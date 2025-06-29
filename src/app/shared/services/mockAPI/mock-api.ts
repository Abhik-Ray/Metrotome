import { Injectable } from '@angular/core';
import { DbSchema } from './mock-api.types';
import { JSONFilePreset } from 'lowdb/node';
import { defaultData } from './mockData';
import { Low } from 'lowdb';

@Injectable({
  providedIn: 'root'
})
export class MockApi {
  private db!: Low<DbSchema>;

  constructor() {
    this.initDb();
  }

  private async initDb() {
    this.db = await JSONFilePreset<DbSchema>('db.json', defaultData);
  }

  async getUsers() {
    await this.db.read();
    return this.db.data?.users ?? [];
  }

  async getUser(username: string, password: string) {
    console.log(this);
    await this.db.read();
    const user = this.db.data?.users.find(
      user => user.username === username && user.password === password
    );
    if(!user){
      return {
        code: 404,
        message: 'Incorrect username or password!'
      }
    } else {
      return user;
    }
  }
}
