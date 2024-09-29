import { Injectable } from '@angular/core';
import { Course } from '../Modal/Course';
import { courseData } from '../data/Learning.data';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
private course:Course = courseData;
  constructor() { }

  getCourse(): Course{
    return this.course;
  }
}
