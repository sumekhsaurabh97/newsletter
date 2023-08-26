import React from "react";
import axios from "axios";
import { useState, useRef } from "react";

import styles from "./styles/InputBtn.module.scss";

export default function InputBtn(props) {
  const [email, setEmail] = useState("");
  const emailref = useRef(null);

  const collections_name = props.collections_name;

  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    props.linkSendedfunc(false);
    setEmail("");
    postData();
  };

  const postData = async () => {
    const res = await axios.post(
      "https://newsletter12.pythonanywhere.com/api/send_link",
      {
        email: email,
        category: collections_name,
        user_referral_code: "NA",
      }
    );
  };
  return (
    <>
      <form>
        <input
          type="email"
          name="email"
          id=""
          placeholder="Enter your best Email"
          ref={emailref}
          className={styles.input_box}
          value={email}
          onChange={handleChange}
        />
        <button
          type="submit"
          className={styles.btn_style}
          onClick={submitHandler}
          disabled={!email}
        >
          {props.btn_text}
        </button>
      </form>
    </>
  );
}
