import { Component, Input } from '@angular/core';
import { Student } from '../../Modal/Student';
import { ItemStudentComponent } from "../item-student/item-student.component";

@Component({
  selector: 'Invoice-detail',
  standalone: true,
  imports: [ItemStudentComponent],
  templateUrl: './invoice-detail.component.html',
})
export class InvoiceDetailComponent {
  @Input()students!:Student[]
}
