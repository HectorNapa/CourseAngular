import { Component, Input } from '@angular/core';
import { Student } from '../../Modal/Student';

@Component({
  selector: 'tr[Item-student]',
  standalone: true,
  imports: [],
  templateUrl: './item-student.component.html',
})
export class ItemStudentComponent {
  @Input()student!:Student
}
