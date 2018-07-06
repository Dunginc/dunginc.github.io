import { NgModule }                 from "@angular/core";
import { CommonModule }             from '@angular/common';

import { GameContainerComponent }   from "./game-container.component";
import { VillageComponent }         from '../village/village.component';
import { MaterialModule }           from "../material.module";

@NgModule({
    imports: [CommonModule,MaterialModule],
    declarations: [GameContainerComponent, VillageComponent],
    exports: [GameContainerComponent]
})
export class GameContainerModule {
    
}