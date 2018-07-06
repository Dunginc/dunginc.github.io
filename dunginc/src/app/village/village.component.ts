import { Component, OnInit } from '@angular/core';

import { VillageService } from './village.service';
import { Observable } from 'rxjs';
import { Select } from '@ngxs/store';
import { VillageState } from './village.state';
import { VillageModel } from './village.model';

@Component({
  selector: 'dinc-village',
  templateUrl: './village.component.html',
  styleUrls: ['./village.component.css']
})
export class VillageComponent implements OnInit {
  @Select(VillageState) villageState$: Observable<VillageModel>

  actions: any;
  roamTitle: string;
  roamFlair: string;

  constructor(private villageService: VillageService) {
  }

  ngOnInit() {
    this.villageState$.subscribe(state => {
      console.log('village state changed, processing changes');
      this.actions = this.villageService.getActions(state.step);
      this.roamTitle = this.villageService.getRoamTitle(state.step);
      this.roamFlair = this.villageService.getRoamFlair(state.step);
    });
  }
}
