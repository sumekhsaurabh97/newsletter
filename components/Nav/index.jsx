import React from "react";
import Image from "next/image";
import Link from "next/link";


import styles from "./styles/nav.module.scss"

export default function Nav() {
  return (
    <div className="container-fluid" style={{ backgroundColor: "#F9F6EF" }}>
      <header className="container pt-4 d-flex justify-content-between">
        <div className={styles.logo}>
          <Image
            src="/assets/images/logo.png"
            width={59}
            height={23}
            alt="Pic of logo"
          />
          <span>Hero Curators</span>
        </div>
        <div className={styles.menu}>
          <Link href="./menu">
            <Image
              src="/assets/images/menu.png"
              width={28}
              height={22}
              alt="Pic of menu"
            />
          </Link>
        </div>
      </header>
    </div>
  );
}
