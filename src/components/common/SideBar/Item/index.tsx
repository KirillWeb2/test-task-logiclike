import React, { useContext } from "react";

import { CoursesContext } from "../../../../features/context/courses";

import s from "../index.module.scss";

export default React.memo(function SideBarItem({
  label,
  tag,
}: {
  label: string;
  tag: string;
}) {
  const { setCurrentTag, currentTag } = useContext(CoursesContext);

  const updateCurrentTagHandle = () => {
    setCurrentTag(tag);
  };
  
  return (
    <div
      className={[s.sidebar__item, currentTag === tag ? s.active : ""].join(
        " "
      )}
      onClick={updateCurrentTagHandle}
    >
      {label}
    </div>
  );
});
