import { useState } from "react";

import { CoursesContext } from "../../../features/context/courses";
import { useGetCourses } from "../../../service/hooks/useGetCourses";
import SideBar from "../../common/SideBar";
import Courses from "./Courses";

import s from "./index.module.scss";

export default function Main() {
  const { data, isLoading } = useGetCourses();

  const [currentTag, setCurrentTag] = useState("");

  if (isLoading) return <>Загрузка...</>;

  if (!data) return <>Произошла ошибка</>;

  return (
    <CoursesContext.Provider
      value={{ tags: data?.tags || [], currentTag, setCurrentTag }}
    >
      <div className={s.main}>
        <SideBar />
        <Courses courses={data.courses || []} />
      </div>
    </CoursesContext.Provider>
  );
}
