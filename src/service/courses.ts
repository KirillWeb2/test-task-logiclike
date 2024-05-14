import { AxiosResponse } from "axios";

import instance from "./instance";
import { GetCoursesResType } from "./types";

export const coursesService = {
  getCourses: async () => {
    return instance
      .get<GetCoursesResType>("/docs/courses.json")
      .then((res) => res.data);
  },
};
