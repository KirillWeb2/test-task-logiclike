import { useQuery } from "@tanstack/react-query";

import { QUERY_KEY_GET_COURSES } from "../../features/constants";
import { coursesService } from "../courses";
import parseTags from "../../helpers/parseTags";

export const useGetCourses = () => {
  return useQuery({
    queryKey: [QUERY_KEY_GET_COURSES],
    queryFn: () => coursesService.getCourses(),
    select: (data) => {
      const tags = parseTags(data);

      return {
        courses: data,
        tags,
      };
    },
  });
};
