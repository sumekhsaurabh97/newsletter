import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";

import styles from "./styles/ThankYou.module.scss";

export default function ThankYou() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/refral");
    }, 3000);
  }, []);
  return (
    <div
      className={`d-flex justify-content-center align-items-center py-4 px-3`}
    >
      <div className={`py-5 px-4 ${styles.final_submition_card}`}>
        <p>
          🎈 🎈Congratulations on joining and visit the exclusive club with your
          valuable data.
        </p>
        <span>many many thanks from our team.</span>
      </div>
    </div>
  );
}