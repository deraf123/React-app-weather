import React, { useEffect } from "react";
import Select from "react-select";
import GlobalSwgSelector from "../../assets/icons/GlobalSwgSelector";
import { Theme } from "../../context/ThemeContext";
import { useTheme } from "../../hooks/useTheme";
import s from "./Header.module.scss";
type Props = {};

export const Header = (props: Props) => {
  const theme = useTheme();

  const options = [
    { value: "city-1", label: "Санкт-Петербург" },
    { value: "city-2", label: "Москва" },
    { value: "city-3", label: "Новгород" },
  ];

  const colorStyle = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor:
        theme.theme === Theme.DARK ? "#4f4f4f" : "rgba(21,147,255,0.2)",
      width: "194px",
      height: "37px",
      border: "none",
      borderRadius: "10px",
      zIndex: 100,
    }),
    singleValue: (styles: any) => ({
      ...styles,
      color: theme.theme === Theme.DARK ? "#fff" : "#000",
    }),
  };
  const changeTheme = () => {
    theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  };

  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <GlobalSwgSelector id='header-logo' />
        </div>
        <div className={s.title}>React weather</div>
      </div>
      <div className={s.wrapper}>
        <div className={s.change_them} onClick={changeTheme}>
          <GlobalSwgSelector id='change-them' />
        </div>
        <Select
          defaultValue={options[0]}
          styles={colorStyle}
          options={options}
        />
      </div>
    </header>
  );
};
