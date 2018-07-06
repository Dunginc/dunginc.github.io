import { BrowserModule }            from '@angular/platform-browser';
import { BrowserAnimationsModule }  from '@angular/platform-browser/animations';
import { NgModule }                 from '@angular/core';
import { NgxsModule }               from '@ngxs/store';

import { AppComponent }             from './app.component';
import { HeaderComponent }          from './header/header.component';
import { MaterialModule }           from './material.module';
import { GameContainerModule }      from './game-container/game-container.module';
import { DebugComponent }           from './debug/debug.component';
import { GameState }                from './game-container/game.state';
import { VillageState }             from './village/village.state';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DebugComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgxsModule.forRoot([GameState, VillageState]),
    GameContainerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
