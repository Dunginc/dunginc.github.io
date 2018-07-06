import { Injectable } from "@angular/core";
import { GameService } from "../game-container/game.service";
import { Store } from "@ngxs/store";
import { Roam } from "./actions/roam.action";
import { TurnBack } from "./actions/turnBack.actions";
import { Settle } from "./actions/settle.action";
import { ResetAction } from "../game-container/actions/reset.action";

@Injectable({
    providedIn: 'root'
})
export class VillageService {
    private actions: Array<Object>[] = [
        [{label: "Roam", action: this.roam.bind(this)}],
        [{label: "Roam", action: this.roam.bind(this)}],
        [{label: "Roam", action: this.roam.bind(this)}, {label: "Settle", action: this.settle.bind(this)}],
        [{label: "Roam", action: this.roam.bind(this)}, {label: "Settle", action: this.settle.bind(this)}, {label: "Turn back", action: this.turnBack.bind(this)}],
        [{label: "Roam", action: this.roam.bind(this)}, {label: "Settle", action: this.settle.bind(this)}, {label: "Turn back", action: this.turnBack.bind(this)}],
        [{label: "Try again", action: this.reset.bind(this)}],
        [{label: "Fortify"}]
    ];

    private roamTitle: string[] = [
        "Outside the walls",
        "Forest line",
        "Deep into the forest",
        "Even deeper into the forest",
        "Very deep into the forest",
        "Bottom of the cliff",
        "Village"
    ];

    private roamFlair: string[] = [
        "You have been betrayed by your kingdom and you've been exiled from your kingdom. You decide to roam and look for a place to settle.",
        "You reach the edge of a forest. You decide it's best to venture into the forest to find a place to settle.",
        "After a long walk you reach a bare patch in the middle of the forest. This might be a nice place to settle or you could continue looking for a better place.",
        "After yet another long walk you meet a beatiful open field surrounded by the forest. This might be a nice spot to settle or you could continue looking for a better place.",
        "The journey is taking a toll on you, will you settle here?",
        "After a long journey you lose all focus and don't notice you reached the edge of a cliff. You fall and die.",
        "You start settling..."
    ];

    constructor(private gameService: GameService, private store: Store) {
        gameService.gameLoop.subscribe(this.loop.bind(this));
    }

    private loop(id: number) {

    }

    roam() {
        this.store.dispatch(new Roam());
    }

    settle() {
        this.store.dispatch(new Settle());
    }

    turnBack() {
        this.store.dispatch(new TurnBack());
    }

    reset() {
        this.store.dispatch(new ResetAction());
    }

    public getRoamFlair(index: number): string {
        if (index < this.roamFlair.length) {
            return this.roamFlair[index];
        } else {
            return "Nothing to declare";
        }
    }

    public getRoamTitle(index: number): string {
        if (index < this.roamTitle.length) {
            return this.roamTitle[index];
        } else {
            return "Nothing to declare";
        }
    }

    public getActions(index: number): Object {
        if (index < this.actions.length) {
            return this.actions[index];
        } else {
            return {};
        }
    }

    /**
     * 
     * @param action an action that will get added to the final entry in the actions array
     */
    public addAction(action: Object) {
        this.actions[this.actions.length - 1].push(action);
    }

}