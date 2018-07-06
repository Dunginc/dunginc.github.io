import { State, StateContext, Action } from "@ngxs/store";
import { VillageModel } from "./village.model";
import { Roam } from "./actions/roam.action";
import { Settle } from "./actions/settle.action";
import { TurnBack } from "./actions/turnBack.actions";

@State<VillageModel>({
    name: 'village',
    defaults: {
        step: 0,
        settled: false
    }
})
export class VillageState {

    constructor() {

    }

    @Action(Roam)
    roam({patchState, getState}: StateContext<VillageModel>) {
        const currentStep: number = getState().step;
        patchState({step: currentStep + 1})
    }

    @Action(TurnBack)
    turnBack({patchState, getState}: StateContext<VillageModel>) {
        const currentStep: number = getState().step;
        patchState({step: currentStep - 1})
    }

    @Action(Settle)
    settle({patchState, getState}: StateContext<VillageModel>) {
        patchState({settled: true});
    }

    

}