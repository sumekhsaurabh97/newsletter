import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import  Nav from "../../components/Nav"
import InputBtn from "../../components/InputBtn";
import TermsConditions from "../../components/Terms-Conditions";
import LinkSent from "../../components/LinkSent";

import { Collections } from "../../components/Data/collectionData";
import { reviews } from "../../components/Data/reviews";

import styles from "./styles/homePage.module.scss";

export default function HomePage(props) {
  const [linkSentPopup, setLinkSentPopup] = useState(true);

  function linkSentfunc(popup) {
    setLinkSentPopup(popup);
  }
  return (
    <>
      <Nav/>
      {linkSentPopup ? (
        <div>
          <div
            className="container-fluid pt-5 pb-5"
            style={{ backgroundColor: "#F9F6EF" }}
          >
            <div className={`container text-center mt-5 ${styles.hero_section}`}>
              <h1 className={styles.heading_style}>
                Unlock your potential with our handpicked newsletters!
              </h1>
              <p className={` mt-4 ${styles.para_style}`}>
                Welcome to the realm of expert curators, where we unlock your
                potential with handpicked newsletters!
              </p>
              <p className={`text-center mt-4 mb-4 ${styles.para_style}`}>
                We're a team of growth enthusiasts dedicated to serving you the
                most valuable insights, empowering both you and your business to
                thrive like never before
              </p>
              <InputBtn
                linkSendedfunc={linkSentfunc}
                btn_text="Subscriber Now"
                collections_name={null}
              />
            </div>
          </div>

          {/* {linkSendedPopup ?( */}
          <div className="container text-center pb-5">
            <h1 className={`mt-5 mb-5 ${styles.section_heading}`}>
              Loved by smart folks everywhere
            </h1>
            <div className={`d-flex column-gap-5 ${styles.reviewed}`}>
              {reviews.map((item, index) => {
                return (
                  <div className={styles.review_para} key={index}>
                    <p>{item.reviewers_thought}</p>
                    <p className="fw-bold text-end">{item.reviewers_name}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* newsletter collection */}
          <div
            className="container-fluid pb-5"
            style={{ backgroundColor: "#F9F6EF" }}
          >
            <div className="container">
              <h2 className={`pt-5 pb-5 text-center ${styles.section_heading}`}>
                Collection of our Newsletters
              </h2>

              <div
                className={`d-flex flex-wrap justify-content-between text-center ${styles.collection_card}`}
              >
                {Collections.map((item, index) => {
                  return (
                    <div className={`${styles.collection_card_content}`} key={index}>
                      <Link href={`/${item.page_name}`}>
                        <Image
                          src={item.src}
                          width={100}
                          height={100}
                          alt={item.alt}
                          className={styles.collection_img}
                        />
                        <p className={`mt-3 mb-3 ${styles.title}`}>
                          {item.title}
                        </p>

                        <p className={`mb-5 ${styles.summary}`}>
                          {item.summary}
                        </p>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* read by leaders */}
          <div className="container pb-5">
            <h2 className={`pt-5 text-center ${styles.section_heading}`}>
              Read by Leaders at:
            </h2>
            <div className={`d-flex justify-content-center`}>
              <div
                className={`d-flex flex-wrap justify-content-center ${styles.leaders_icon}`}
              >
                <Image
                  src="/assets/images/affordable.svg"
                  width={120}
                  height={29}
                  alt="affordable"
                  className="mt-5"
                />
                <Image
                  src="/assets/images/cube.svg"
                  width={99}
                  height={24}
                  alt="cube"
                  className="mt-5"
                />
                <Image
                  src="/assets/images/glevogue.svg"
                  width={125}
                  height={30}
                  alt="glevogue"
                  className="mt-5"
                />
                <Image
                  src="/assets/images/coco.svg"
                  width={97}
                  height={25}
                  alt="coco"
                  className="mt-5"
                />
                <Image
                  src="/assets/images/holistro.svg"
                  width={97}
                  height={24}
                  alt="holistro"
                  className="mt-5"
                />
                <Image
                  src="/assets/images/individualified.svg"
                  width={152}
                  height={30}
                  alt="individualified"
                  className="mt-5"
                />
                <Image
                  src="/assets/images/super_playbook.svg"
                  width={152}
                  height={30}
                  alt="super_playbook"
                  className="mt-5"
                />
                <Image
                  src="/assets/images/marketeeo.svg"
                  width={149}
                  height={20}
                  alt="marketeeo"
                  className="mt-5"
                />
                <Image
                  src="/assets/images/tashan.svg"
                  width={71}
                  height={30}
                  alt="tashan"
                  className="mt-5"
                />
              </div>
            </div>
          </div>

          {/* Engage-- */}
          <div
            className="container-fluid"
            style={{ backgroundColor: "#F9F6EF" }}
          >
            <div className={`container pt-5 pb-5 text-center ${styles.engage}`}>
              <h5 className={`mb-4 text-center ${styles.heading_style}`}>
                Engage, Elevate, Excel: Unleash the Power of Curated Newsletters
                with Hero Curators
              </h5>
            <div className={styles.engage_inputBtn}>
            <InputBtn
                btn_text="Subscriber Now"
                linkSendedfunc={linkSentfunc}
                collections_name={null}
              />
            </div>
            </div>
          </div>
          <div
            className="container-fluid"
            style={{ backgroundColor: "#F9F6EF" }}
          >
            <TermsConditions />
          </div>
        </div>
      ) : (
        <LinkSent />
      )}
    </>
  );
}
