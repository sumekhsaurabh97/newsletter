import React from "react";

import styles from "./styles/loginIn.module.scss";

export default function LogIn() {
  return (
    <div
      className={`d-flex justify-content-center align-items-center ${styles.logIn_container}`}
    >
      <div className={`py-5 ps-4 pe-5 m-3 ${styles.logIn_card}`}>
        <p>
          🎈 Congratulations on joining the exclusive club of verified email
          warriors!
        </p>
        <p>
          Your messages now carry the mighty badge of authenticity, making you a
          true email superhero in the digital realm. 💪📧
        </p>
        <span>Complete Profile and Proceed</span>
        <input
          type="text"
          name=""
          id=""
          placeholder="Name"
          className={`mt-3 ps-2  d-block ${styles.input_box}`}
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="Company"
          className={`mt-3 ps-2 d-block ${styles.input_box}`}
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="Designation"
          className={`mt-3 ps-2 d-block ${styles.input_box}`}
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="Passward"
          className={`mt-3 ps-2 d-block ${styles.input_box}`}
        />
        <button className={`mt-3`}>Let’s Get Started</button>
      </div>
    </div>
  );
}
