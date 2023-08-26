import React from "react";
import Link from "next/link";

import styles from "./styles/Terms&Conditions.module.scss";

export default function Term_conditions() {
  return (
    <>
      <div
        className={`d-flex justify-content-between ps-5 pe-5 pb-3 ${styles.terms_conditions}`}
      >
        <ul className={`d-flex list-unstyled flex-wrap ${styles.list}`}>
          <li className="pt-1">
            <Link
              href=""
              to="javascript:void(0)"
              onClick={() => (window.location = "hello@herocurators.com")}
            >
              Contact Us
            </Link>
          </li>
          <li className="pt-1">
            <Link href="https://www.passionfroot.me/every" target="blank">
              · Sponsor Us
            </Link>
          </li>
          <li className="pt-1">
            <Link href="https://every.to/search" target="blank">
              · Search
            </Link>
          </li>
          <li className="pt-1">
            <Link href="https://every.to/legal" target="blank">
              · Terms
            </Link>
          </li>
        </ul>
        <p className="pt-1 ms-4 text-center">
          ©2023 Hero Curators an Origo Company
        </p>
      </div>
    </>
  );
}
