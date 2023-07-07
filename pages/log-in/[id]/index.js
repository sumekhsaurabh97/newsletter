import React from "react";
import { useState } from "react";
import { useParams } from "next/navigation";

import styles from "./styles/loginIn.module.scss";

export default function LogIn() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [designation, setDesignation] = useState("");
  const [passward, setPassward] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    postRequest();
    setName("");
    setCompany("");
    setDesignation("");
    setPassward("");
  };

  const postRequest = async () => {
    let option = {
      method: "POST",
      Headers: { "content-type": "application/json" },
      body: JSON.stringify({
        user_id: "string",
        name: name,
        company: company,
        designation: designation,
        password: passward,
      }),
    };
    await fetch("https://jsonplaceholder.typicode.com/posts", option).then(
      (response) => response.json()
    );
  };

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
    </div>
  );
}
