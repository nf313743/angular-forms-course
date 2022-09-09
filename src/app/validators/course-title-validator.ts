import { AbstractControl, AsyncValidatorFn } from "@angular/forms";
import { map } from "rxjs/operators";
import { CoursesService } from "../services/courses.service";

export function courseTitleValidator(
  courses: CoursesService
): AsyncValidatorFn {
  return (control: AbstractControl) => {
    return courses.findAllCourses().pipe(
      map((courses) => {
        const course = courses.find(
          (x) => x.description.toLowerCase() === control.value.toLowerCase()
        );
        return course ? { titleExists: true } : null;
      })
    );
  };
}
