import React from "react";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";


import Header from "../../../components/Header"
import ThankYou from "../../../components/ThankYou";

import styles from "./styles/create_user.module.scss";

export default function UserCreate({ query }) {
  const router = useRouter();
  const id = router.query.id;

  const [form, setForm] = useState(true);
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [designation, setDesignation] = useState("");
  const [passward, setPassward] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setForm(!form);
    createUser();
  };

  const createUser = async () => {
    const res = await axios.post(
      "https://newsletter12.pythonanywhere.com/api/create_user",
      {
        user_id: id,
        name: name,
        company: company,
        designation: designation,
        password: passward,
      }
    );
  };

  return (
    <>
      <Header />
      <div
        className={`d-flex justify-content-center align-items-center ${styles.logIn_container}`}
      >
        {form ? (
          <div className={`py-5 ps-4 pe-5 m-3 mt-5 ${styles.logIn_card}`}>
            <p>
              🎈 Congratulations on joining the exclusive club of verified email
              warriors!
            </p>
            <p>
              Your messages now carry the mighty badge of authenticity, making
              you a true email superhero in the digital realm. 💪📧
            </p>
            <span>Complete Profile and Proceed</span>
            <form action="" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                id=""
                placeholder="Name"
                required
                className={`mt-3 ps-2  d-block ${styles.input_box}`}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                value={name}
              />
              <input
                type="text"
                name="company"
                id=""
                placeholder="Company"
                required
                className={`mt-3 ps-2 d-block ${styles.input_box}`}
                onChange={(e) => {
                  setCompany(e.target.value);
                }}
                value={company}
              />
              <input
                type="text"
                name="designation"
                id=""
                placeholder="Designation"
                className={`mt-3 ps-2 d-block ${styles.input_box}`}
                value={designation}
                required
                onChange={(e) => {
                  setDesignation(e.target.value);
                }}
              />
              <input
                type="text"
                name="passward"
                id=""
                placeholder="Passward"
                required
                className={`mt-3 ps-2 d-block ${styles.input_box}`}
                onChange={(e) => {
                  setPassward(e.target.value);
                }}
                value={passward}
              />
              <button className={`mt-3`}>Let’s Get Started</button>
            </form>
          </div>
        ) : (
          <ThankYou />
        )}
      </div>
    </>
  );
}
