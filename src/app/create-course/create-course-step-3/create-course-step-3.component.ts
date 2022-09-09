import { Component } from "@angular/core";
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";

@Component({
  selector: "create-course-step-3",
  templateUrl: "create-course-step-3.component.html",
  styleUrls: ["create-course-step-3.component.scss"],
})
export class CreateCourseStep3Component {
  form: FormGroup = this.fb.group({
    lessons: this.fb.array([]),
  });

  constructor(private fb: FormBuilder) {}

  get lessons(): FormArray {
    return this.form.controls["lessons"] as FormArray;
  }

  addLesson(): void {
    const lessonForm = this.fb.group({
      title: ["", Validators.required],
      level: ["beginner", Validators.required],
    });


    this.lessons.push(lessonForm);

    console.log(this.form.valid)
    console.log(this.lessons.length > 0)

  }

  deleteLesson(lessonIndex: number): void {
    this.lessons.removeAt(lessonIndex);
  }
}
