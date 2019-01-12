import {Component, OnInit} from '@angular/core';
import {MatSwUpdate} from "ngx-mat-sw-update";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  checks = [];
  updates = [];

  constructor(private msu: MatSwUpdate) {
  }

  ngOnInit(): void {
    this.msu.lastCheck$.subscribe(date => this.checks.push(date));
    this.msu.updateAvailable$.pipe(
      map(() => new Date())
    ).subscribe(date => this.updates.push(date));

    this.msu.checkForUpdate();
  }

}
