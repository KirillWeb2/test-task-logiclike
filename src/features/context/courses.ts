import { createContext } from "react";

export const CoursesContext = createContext<{
  tags: string[];
  currentTag: string;
  setCurrentTag: (tag: string) => void;
}>({
  tags: [],
  currentTag: "",
  setCurrentTag: () => {},
});
