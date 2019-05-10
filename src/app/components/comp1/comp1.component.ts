import { Component, OnInit } from '@angular/core';

//NGRX store
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppStore } from '../../state/app.state';
import { AppActions, Action1, Action2 } from '../../state/auth/index.action';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  currentAction: Observable<string>;

  constructor( private store: Store<AppStore>) { 
    this.currentAction = this.store.select( 'actionName' );
    console.log(this.currentAction)
  }

  ngOnInit() {
  }

  firstAction() {
    this.store.dispatch( new Action1(1) )
  }
  
  secondAction() {
    this.store.dispatch( new Action2(2) )
  }

}
