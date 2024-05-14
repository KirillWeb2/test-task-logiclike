import { CourseType } from "../../../../../types/course";

import s from "./index.module.scss";

export default function CoursesItem({ course }: { course: CourseType }) {

  return (
    <div className={s.coursesItem}>
      <div
        className={s.coursesItem__img}
        style={{ backgroundColor: course.bgColor }}
      >
        <img src={course.image} alt={course.name} />
      </div>
      <div className={s.coursesItem__content}>
        <div className={s.coursesItem__content_title}>{course.name}</div>
      </div>
    </div>
  );
}
