import { Component } from '@angular/core';
import { MdlDialogService } from 'angular2-mdl';

@Component({
  selector: 'app',
  template: `
<mdl-layout mdl-layout-fixed-header mdl-layout-header-seamed>
        <mdl-layout-header>
          <mdl-layout-header-row>
            <mdl-layout-title>Title</mdl-layout-title>
            <mdl-layout-spacer></mdl-layout-spacer>
            <!-- Navigation. We hide it in small screens. -->
            <nav class="mdl-navigation">
              <a class="mdl-navigation__link">Link</a>
            </nav>
          </mdl-layout-header-row>
        </mdl-layout-header>
        <mdl-layout-drawer>
          <mdl-layout-title>Title</mdl-layout-title>
          <nav class="mdl-navigation">
            <a class="mdl-navigation__link">Link</a>
          </nav>
        </mdl-layout-drawer>
        <mdl-layout-content class="demo-content">


        <p>
          <button mdl-button  mdl-button-type="fab" mdl-colored="primary" mdl-ripple (click)="showDialog()">
            <mdl-icon>add</mdl-icon>
          </button>
        </p>

        <p>
          <button mdl-button mdl-button-type="raised" mdl-colored="accent" mdl-ripple>
            Button
          </button>
        </p>

          <p>
            <mdl-icon mdl-badge="1" mdl-badge-overlap>account_box</mdl-icon>
          </p>

          <p>
          <mdl-spinner single-color active></mdl-spinner>
          </p>

          <p>
          <mdl-textfield type="text" label="Text..." [(ngModel)]="text3" floating-label></mdl-textfield>
          </p>

          <p>
            <mdl-checkbox [mdl-ripple]="true" [(ngModel)]="checkbox1"> Checkbox </mdl-checkbox>
          </p>

          <p>
            <mdl-radio name="group1" value="1" [(ngModel)]="radioOption" mdl-ripple>Value 1</mdl-radio>
            <mdl-radio name="group1" value="2" [(ngModel)]="radioOption" mdl-ripple>Value 2</mdl-radio>
          </p>

          <p>
            <mdl-switch [(ngModel)]="checkbox1" mdl-ripple>Option 1</mdl-switch>
          </p>

        </mdl-layout-content>
      </mdl-layout>
  
    <div>
      <a routerLink="/home">Home</a>
      <a routerLink="/about">About</a>
    </div>
    
    <router-outlet></router-outlet>
  `
})
export class AppComponent {

  constructor(private dialogService: MdlDialogService){
    console.log('AppComponent created')
  }

  public test(){
    console.log('test');
  }

  public showDialog(){
    this.dialogService.alert('test');
  }
}
