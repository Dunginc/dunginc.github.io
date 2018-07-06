import { Component, OnInit, OnDestroy } from '@angular/core';
import { GameService } from '../game-container/game.service';
import { Subscription, Observable } from 'rxjs';
import { Select } from '@ngxs/store';
import { VillageState } from '../village/village.state';
import { VillageModel } from '../village/village.model';

@Component({
  selector: 'dinc-debug',
  templateUrl: './debug.component.html',
  styleUrls: ['./debug.component.css']
})
export class DebugComponent implements OnInit, OnDestroy {
  private gameLoopSub: Subscription;
  gameLoopId: number;
  villageStateObject: Object;

  @Select(VillageState) villageState: Observable<VillageModel>;

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.gameLoopSub = this.gameService.gameLoop.subscribe(this.loop.bind(this));
    this.villageState.subscribe((state) => this.villageStateObject = state)
  }

  ngOnDestroy() {
    this.gameLoopSub.unsubscribe();
  }

  private loop(id: number) {
    this.gameLoopId = id;
  }

}
