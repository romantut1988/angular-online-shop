import {Component} from '@angular/core';

interface WeekGrade {
  id: number
  gradeItem: number
}

interface Lesson {
  id: number
  title: string
  weekGrades: WeekGrade[]
}

@Component({
  selector: 'insta-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  isLoading = false
  lessons: Lesson[] = [
    {
      id: 0,
      title: 'Math',
      weekGrades: [
        {
          id: 0,
          gradeItem: 5
        },
        {
          id: 1,
          gradeItem: 2
        },
        {
          id: 2,
          gradeItem: 3
        },
      ]
    },
    {
      id: 1,
      title: 'Physic',
      weekGrades: [
        {
          id: 0,
          gradeItem: 3
        },
        {
          id: 1,
          gradeItem: 4
        },
        {
          id: 2,
          gradeItem: 9
        },
      ]
    }
  ]

  constructor() {
    setTimeout(() => {
      this.isLoading = false
    }, 3000)
  }

  getGrade(grade: string) {
    //   this.grades.push(grade)
  }
}
