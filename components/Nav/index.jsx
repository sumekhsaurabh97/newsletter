// import React from "react";
// import Image from "next/image";
// import Link from "next/link";

// import styles from "./styles/nav.module.scss"

// export default function Nav() {
//   return (
//     <div className="container-fluid" style={{ backgroundColor: "#F9F6EF" }}>
//       <header className="container pt-4 d-flex justify-content-between">
//         <div className={styles.logo}>
//           <Image
//             src="/assets/images/logo.svg"
//             width={59}
//             height={23}
//             alt="Pic of logo"
//           />
//           <span>Hero Curators</span>
//         </div>
//         <div className={styles.menu}>
//           <Link href="./menu">
//             <Image
//               src="/assets/images/menu.png"
//               width={28}
//               height={22}
//               alt="Pic of menu"
//             />
//           </Link>
//         </div>
//       </header>
//     </div>
//   );
// }

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./styles/nav.module.scss";

export default function Header() {
  const [width, setWidth] = useState("0%");

  return (
    <>
      <div
        className="container-fluid"
        style={{ backgroundColor: "#F9F6EF", position: "fixed" }}
      >
        <header
          className={`container mt-3 mb-3 p-0 d-flex justify-content-between ${styles.header}`}
        >
          <div
            id="mySidenav"
            className={styles.sidenav}
            style={{ width: width }}
          >
            <div className={styles.openMenuContainer}>
              <a
                href="javascript:void(0)"
                className={styles.closebtn}
                onClick={() => {
                  setWidth("0%");
                }}
                style={{ color: "#4a4a92" }}
              >
                &times;
              </a>
            </div>
            <h1 className="d-flex justify-content-center mt-4">commimg soon</h1>
          </div>

          <div className={styles.opnebtn}>
            <Image
              src="/assets/images/menu.png"
              width={28}
              height={22}
              alt="menuIcon"
              className={styles.menuIcon}
              onClick={() => {
                setWidth("100%");
              }}
            />
            <div className={styles.logo}>
              <Link href="/">
                <Image
                  src={"/assets/images/logo.svg"}
                  alt="logo"
                  width={75}
                  height={30}
                />
                <span>Hero Curators</span>
              </Link>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}
