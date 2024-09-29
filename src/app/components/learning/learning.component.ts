import { Component, OnInit } from '@angular/core';
import { Course } from '../../Modal/Course';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-learning',
  standalone: true,
  imports: [],
  templateUrl: './learning.component.html',
})
export class LearningComponent implements OnInit {
course!:Course;
constructor (private services: CourseService){}
  ngOnInit(): void {
    this.course = this.services.getCourse();
  }
}
