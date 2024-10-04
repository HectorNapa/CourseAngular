import { Component, OnInit } from '@angular/core';
import { Course } from '../../Modal/Course';
import { CourseService } from '../../services/course.service';
import { SchoolNameComponent } from "../school-name/school-name.component";
import { InvoiceDetailComponent } from "../invoice-detail/invoice-detail.component";
import { ItemStudentComponent } from '../item-student/item-student.component';

@Component({
  selector: 'app-learning',
  standalone: true,
  imports: [SchoolNameComponent, InvoiceDetailComponent],
  templateUrl: './learning.component.html',
})
export class LearningComponent implements OnInit {
course!:Course;
constructor (private services: CourseService){}
  ngOnInit(): void {
    this.course = this.services.getCourse();
  }
}
