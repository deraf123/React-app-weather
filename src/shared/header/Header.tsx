import React from "react";
import Select from "react-select";
import GlobalSwgSelector from "../../assets/icons/GlobalSwgSelector";
import s from "./Header.module.scss";
type Props = {};

export const Header = (props: Props) => {
  const options = [
    { value: "city-1", label: "Санкт-Петербург" },
    { value: "city-2", label: "Москва" },
    { value: "city-3", label: "Новгород" },
  ];

  const colorStyle = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: "rgba(21,147,255,0.2)",
      width: "194px",
      height: "37px",
      border: "none",
      borderRadius: "10px",
      zIndex: 100,
    }),
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
        <div className={s.change_them}>
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
