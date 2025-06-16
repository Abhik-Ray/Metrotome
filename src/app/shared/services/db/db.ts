import { Injectable } from '@angular/core';
import Dexie, {Table} from 'dexie'
import { 
  User,
  UserProgress,
  UserConfig,
  Sheet,
  Instrument,
  Note,
  SheetReference,
  SheetBackingTrack,
  Genre,
 } from './dbSchema.types';

@Injectable({
  providedIn: 'root'
})

class AppDB extends Dexie {

  userTable!: Table<User, number>;
  userProgressTable!: Table<UserProgress, number>;
  userConfigTable!: Table<UserConfig, number>;
  sheetTable!: Table<Sheet, number>;
  instrument!: Table<Instrument, number>;
  noteTable!: Table<Note, number>;
  sheetReferenceTable!: Table<SheetReference, number>;
  sheetBackingTrackTable!: Table<SheetBackingTrack, number>;
  genreTable!: Table<Genre, number>;

  constructor(){
    super('ngdexieliveQuery');
    
    this.version(0.1).stores({
      userTable: '++id',
      userProgressTable: '++id',
      userConfigTable: '++id',
      sheetTable: '++id',
      backingTrackTypeTable: '++id',
      noteTable: '++id',
      sheetReferenceTable: '++id',
      sheetBackingTrackTable: '++id',
      genreTable: '++id',
    });
  }
}

export class Db {
  db;

  constructor() {
    this.db = new AppDB()

   }

   async populate () {}
}
