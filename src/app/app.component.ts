import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Angular-Unit-Testing';

  students: any[] = ['saif', 'anim'];
  studentsObservable: Observable<any[]> = of(this.students);

  ngOnInit(): void {
    console.log(this.students);

    this.studentsObservable.subscribe((res) => {
      console.log('inside observable:', res);
    });
  }
}
