import React from "react";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import MenuIcon from "@mui/icons-material/Menu";

import styles from "./styles/header.module.scss";

export default function Header() {
  return (
    <header
      className="mx-4 mt-2 d-flex justify-content-between"
      style={{ height: "40px" }}
    >
      <p className={styles.header_left}>𝕹𝖊𝖜𝖘𝖑𝖊𝖙𝖙𝖊𝖗</p>
      {/* <p>ᑎEᗯᔕᒪETTEᖇ</p> */}
      <div className={styles.header_right}>
        <SearchSharpIcon style={{ cursor: "pointer" }} />
        <MenuIcon className="ms-4" style={{ cursor: "pointer" }} />
      </div>
    </header>
  );
}
