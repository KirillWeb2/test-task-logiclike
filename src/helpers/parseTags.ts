import { CourseType } from "../types/course";

export default function parseTags(courses: CourseType[]) {
  const tags = new Set<string>();

  courses.forEach((course) => {
    course.tags.forEach((tag) => {
      tags.add(tag);
    });
  });
  
  return Array.from(tags);
}
