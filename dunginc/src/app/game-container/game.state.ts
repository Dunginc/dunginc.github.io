import { State, Action, StateContext, Store } from "@ngxs/store";
import { GameStateModel } from "./game-state.model";
import { GameService } from "./game.service";
import { VillageState } from "../village/village.state";
import { ResetAction } from "./actions/reset.action";

@State<GameStateModel>({
    name: 'game',
    defaults: {

    },
    children: [VillageState]
})
export class GameState {

    defaultState: Object = {
        village: { step: 0 }
    };

    constructor(private gameService: GameService, private store: Store) {

    }

    @Action(ResetAction)
    reset(ctx : StateContext<GameStateModel>) {
        ctx.setState(this.defaultState);
    }

}