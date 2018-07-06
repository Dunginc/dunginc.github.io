import { Injectable } from "@angular/core";
import { Observable, interval } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class GameService {
    private _gameLoop: Observable<number>;

    constructor() {
        this.gameLoop = interval(250);
    }

    get gameLoop() {
        return this._gameLoop;
    }

    set gameLoop(observable: Observable<number>) {
        this._gameLoop = observable;
    }

}