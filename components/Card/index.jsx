import React from "react";
import Image from "next/image";
import { useState } from "react";

import Header from "../Header";
import InputBtn from "../InputBtn";
import TermsConditions from "../Terms-Conditions";
import LinkSent from "../LinkSent";

import styles from "./styles/card.module.scss";

export default function Card(props) {
  const { collections_name, heading, title, summary, users_pic, btn_text } =
    props;

  const [linkSentPopup, setLinkSentPopup] = useState(true);

  function linkSentfunc(popup) {
    setLinkSentPopup(popup);
  }

  return (
    <div className="container-fluid" style={{ backgroundColor: "#F9F6EF" }}>
      <Header />

      {linkSentPopup ? (
        <div className={`container pt-5`}>
          <div className={`ps-4 ${styles.card_content}`}>
            <h1
              className={`${styles.collections_name}`}
              style={{ marginBottom: "0px" }}
            >
              {collections_name}
            </h1>
            <h1 className={`${styles.heading_style}`}>{heading}</h1>
            <p className={` mt-4 mb-4 ${styles.title_style}`}>{title}</p>
            <InputBtn
              btn_text={btn_text}
              collections_name={collections_name}
              linkSendedfunc={linkSentfunc}
            />
            <p className={` mt-4 mb-4 ${styles.summary_style}`}>{summary}</p>
          </div>
          {users_pic ? (
            <div className={`mb-5 ${styles.user_pic_container}`}>
              {users_pic.map((item, i) => {
                return (
                  <>
                    <Image
                      src={item}
                      width={70}
                      height={70}
                      alt={`Pic_of_user_` + i}
                      style={{ position: "absolute", top: "0px", left: 43 * i }}
                    />
                  </>
                );
              })}
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        <LinkSent />
      )}
      <div className="pt-5">
        <TermsConditions />
      </div>
    </div>
  );
}
