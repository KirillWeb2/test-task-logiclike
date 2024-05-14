import { useContext } from "react";

import { CoursesContext } from "../../../features/context/courses";
import SideBarItem from "./Item";

import s from "./index.module.scss";

export default function SideBar() {
  const { tags } = useContext(CoursesContext);

  return (
    <div className={s.sidebar}>
      <SideBarItem label="Все темы" tag={""} />
      {tags.map((tag) => (
        <SideBarItem key={tag} label={tag} tag={tag} />
      ))}
    </div>
  );
}
