import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UniversalModule, isBrowser, isNode } from 'angular2-universal/node'; // for AoT we need to manually split universal packages

import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Cache } from './universal-cache';


import {
  MdlButtonModule, MdlLayoutModule, MdlCheckboxModule, MdlRadioModule, MdlSwitchModule,
  MdlIconModule, MdlTextFieldModule, MdlSpinnerModule, MdlDialogModule
} from 'angular2-mdl';

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent ],
  imports: [
    UniversalModule,
    FormsModule,

    HomeModule,
    AboutModule,

    AppRoutingModule,

    MdlButtonModule.forRoot(),
    MdlLayoutModule.forRoot(),
    MdlCheckboxModule.forRoot(),
    MdlRadioModule.forRoot(),
    MdlSwitchModule.forRoot(),
    MdlIconModule.forRoot(),
    MdlTextFieldModule.forRoot(),
    MdlSpinnerModule.forRoot(),
    MdlDialogModule.forRoot()
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [
    { provide: 'isBrowser', useValue: isBrowser },
    { provide: 'isNode', useValue: isNode },
    Cache
  ]
})
export class MainModule {
  constructor(public cache: Cache) {

  }
  // we need to use the arrow function here to bind the context as this is a gotcha in Universal for now until it's fixed
  universalDoDehydrate = (universalCache) => {
    universalCache['Cache'] = JSON.stringify(this.cache.dehydrate());
  }
  universalAfterDehydrate = () => {
    this.cache.clear();
  }
}
