import { Component, inject, input, signal } from '@angular/core';
import { DeveloperMenuAPIData } from './developer-menu.types';
import { Db } from '../shared/services/db/db';

@Component({
  selector: 'app-developer-menu',
  imports: [],
  templateUrl: './developer-menu.html',
  styleUrl: './developer-menu.scss',
  providers: [Db]
})

export class DeveloperMenu {
    events: DeveloperMenuAPIData = {};
    tempEvents: DeveloperMenuAPIData[] = [];
    private db = inject(Db);

    async onRequestClick(event: MouseEvent){
      let target;
      if(!event.target) return;

      target = event.target as HTMLElement;
      const method = target.getAttribute('data-method')

      if(!method) return;

      const requestParmas = document.querySelector('textarea.params[data-method="GET"]')
      const textArea = document.querySelector('textarea.response[data-method="GET"]')

      console.log({textArea, requestParmas})
      if(!textArea || !requestParmas) return
      
      const response = await this.events?.['UserTable']?.[method](requestParmas.textContent);
      console.log({response})
      textArea.textContent = response;
    }


    constructor(){
      this.events = this.db.getAPICalls();

      // console.log({api})

      // Temp developermenudata;
      // this.events = {
      //   UserTable: {
      //     GET: (param) => 'GET Response',
      //     POST: () => 'POST',
      //     PATCH: () => 'PATCH',
      //     DELETE: () => 'DELETE',
      //   }
      // }
    }
}
