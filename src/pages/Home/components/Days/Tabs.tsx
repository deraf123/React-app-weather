import React from "react";
import s from "./Days.module.scss";
type Props = {};
interface tabsType {
  value: string;
}
export const Tabs = (props: Props) => {
  const tabs: tabsType[] = [
    {
      value: "На неделю",
    },
    {
      value: "На 10 дней",
    },
    {
      value: "На месяц",
    },
  ];
  return (
    <div className={s.tabs}>
      <div className={s.tabs__wrapper}>
        {tabs.map((tab) => (
          <div key={tab.value} className={s.tab}>
            {tab.value}
          </div>
        ))}
      </div>
      <div className={s.cancel}>Отменить</div>
    </div>
  );
};
