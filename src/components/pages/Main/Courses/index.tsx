import { useContext } from "react";

import CoursesItem from "./Item";
import { CourseType } from "../../../../types/course";
import { CoursesContext } from "../../../../features/context/courses";

import s from "./index.module.scss";

export default function Courses({ courses }: { courses: CourseType[] }) {
  const { currentTag } = useContext(CoursesContext);

  const filteredCourses = courses.filter((course) =>
    currentTag === "" ? true : course.tags.includes(currentTag)
  );

  return (
    <div className={s.courses}>
      {filteredCourses.map((course) => (
        <CoursesItem key={course.id} course={course} />
      ))}
    </div>
  );
}
