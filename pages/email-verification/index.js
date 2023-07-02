import React from "react";
import { useState } from "react";
import Link from "next/link";
import { Form, Input, Button } from "antd";
import axios from "axios";

import Hello from "../../components/popup";
import styles from "./styles/emailVerification.module.scss";

export default function EmailVerification() {
  const [userEmail, setUserEmail] = useState("");
  const [emailInputCard, setEmailInputCard] = useState(true);
  const [form] = Form.useForm();
  const handleChange = (event) => {
    setUserEmail(event.target.value);
  };

  // const submit = (values) => {
  //   console.log(values);
  //   setUserEmail(values);
  //   form.resetFields();
  //   post();
  // };

  // function post() {
  //   const email = userEmail.email;
  //   const category = "dummy1";
  //   const user_referral_code = "dummy2";
  //   let obj = {
  //     email: userEmail.email,
  //     category: "dummy1",
  //     user_referral_code: "dummy2",
  //   };
  //   let xyz = JSON.stringify(obj);
  //   axios
  //     .post(
  //       "https://newsletter12.pythonanywhere.com/api/send_link",
  //       xyz
  //       {
  //         email,
  //         category,
  //         user_referral_code,

  //       }
  //     )
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  const submit = (values) => {
    setUserEmail(values);
    form.resetFields();
    postRequest();
    setEmailInputCard(!emailInputCard);
  };

  const postRequest = () => {
    let option = {
      method: "POST",
      Headers: { "content-type": "application/json" },
      body: JSON.stringify({
        email: userEmail,
        category: "string",
        user_referral_code: "string",
      }),
    };
    fetch("https://jsonplaceholder.typicode.com/posts", option)
      .then((response) => response.json())
      .then((json) => console.log(json));
    console.log(userEmail);
  };

  return (
    <div
      className={`d-flex justify-content-center align-items-center ${styles.logIn_container}`}
    >
      {emailInputCard ? (
        <div className={`ps-5 py-4 pe-4 m-3 ${styles.logIn_card}`}>
          <p className={styles.heading}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi.
          </p>
          <Form
            name="magic-modal"
            onFinish={submit}
            requiredMark={false}
            labelCol={{ span: 24 }}
            form={form}
            style={{ display: "flex", columnGap: "10px" }}
          >
            <Form.Item
              label=""
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input throughts here!",
                  type: "email",
                },
              ]}
              style={{ width: "60%" }}
            >
              <Input
                className={`me-2 ps-2  ${styles.inputBox}`}
                placeholder="Enter your best mail"
                onChange={handleChange}
              />
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit" className={styles.btn}>
                Submit
              </Button>
            </Form.Item>
          </Form>
          <p className={`mt-2 ${styles.join}`}>
            Join 55,248 founders discovering new markets
          </p>
          <Link href="">
            <span className={`${styles.past_example}`}>
              Past newsletters example
            </span>
          </Link>
          <p className={`mt-5 ${styles.text}`}>Tech requirement </p>
          <p className={`${styles.text} ${styles.user_referral_code}`}>
            In hidden field we have to capture the newsletter type, in this case
            it is SaaS and also referral code from the URL
          </p>
        </div>
      ) : (
        <Hello />
      )}
    </div>
  );
}
