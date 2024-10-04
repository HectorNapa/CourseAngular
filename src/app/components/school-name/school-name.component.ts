import { Component, Input } from '@angular/core';
import { Course } from '../../Modal/Course';

@Component({
  selector: 'School-name',
  standalone: true,
  imports: [],
  templateUrl: './school-name.component.html',
})
export class SchoolNameComponent {
  @Input()course!:Course
}
