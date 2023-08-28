import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";

import styles from "./styles/menu.module.scss";
import { colors } from "@mui/material";

export default function Menu() {
  return (
    <div
      className={` ${styles.menu}`}
    >
      <Link href={"/"}  className ="me-4 pt-4" style={{float :'right', color :'black'}}>
        <CloseIcon  style={{fontSize :'31px'}}/>
      </Link>
      <h1 className="text-center pt-5">comming soon</h1>
    </div>
  );
}
