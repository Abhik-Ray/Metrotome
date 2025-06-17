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
import { PopulationScripts } from './populationScripts';
import { environment } from '../../../../environments/environment';
import { GetUsers } from './db.types';

@Injectable({
  providedIn: 'root'
})

class AppDB extends Dexie {

  userTable!: Table<User, number>;
  userProgressTable!: Table<UserProgress, number>;
  userConfigTable!: Table<UserConfig, number>;
  sheetTable!: Table<Sheet, number>;
  instrumentTable!: Table<Instrument, number>;
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
  public db: AppDB;

  constructor() {
    this.db = new AppDB();
    this.db.on('populate', () => this.populate());
  }

  async populate () {
    if(!environment.production){
      [1,2,4,5].forEach(id => {
        this.db.userTable.add(PopulationScripts.generateUserData(id));
        this.db.userProgressTable.add(PopulationScripts.generateUserProgressData(id, id));
        this.db.userConfigTable.add(PopulationScripts.generateUserConfigData(id, id));
        this.db.sheetTable.add(PopulationScripts.generateSheetData(id));
        this.db.instrumentTable.add(PopulationScripts.generateInstrumentsData(id));
        this.db.sheetReferenceTable.add(PopulationScripts.generateSheetReferenceData(id));
        this.db.sheetBackingTrackTable.add(PopulationScripts.generateSheetBackingTrackData(id, id));
        this.db.genreTable.add(PopulationScripts.generateGenreData(id))
      })
    }
  }

  async getUsers(params: GetUsers){
    if(params.id){
      return await this.db.userTable.get(params.id)
    } else if(params.ids){
      return await this.db.userTable.bulkGet(params.ids)
    } else {
      return await this.db.userTable.toArray();
    }
  }

  postUsers(){}
  patchUsers(){}
  deleteUsers(){}

  getUserProgress(){}
  patchUserProgress(){}

  getUserConfig(){}
  patchUserConfig(){}

  getUserSheets(){}
  postUserSheets(){}
  patchUserSheet(){}
  deleteUserSheet(){}

  getInstruments(){}
  postInstruments(){}
  patchInstruments(){}
  deleteInstruments(){}

  getSheetReferemces(){}
  postSheetReferences(){}
  patchSheetReferences(){}
  deleteSheetReferences(){}

  getSheetBackingTrack(){}
  postSheetBackingTrack(){}
  patchSheetBackingTracks(){}
  deleteSheetBackingTracks(){}
}