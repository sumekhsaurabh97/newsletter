import React from "react";
import Link from "next/link";
import Router from "next/router";

import styles from "./styles/hero.module.scss";
import Header from "../../components/header";

export default function Hero() {
  let handleClick = (event) => {
    let btnText = event.target.innerText;
    let category = btnText.split(" ");
    let categoryName = category[category.length - 1];
    
    Router.push({
      pathname: "/email-verification",
      query: {
        categoryName,
      },
    });
  };

  let technologies = ["SASS", "Bootstrap"];
  return (
    <div>
      <Header />
      <div className={styles.heroSection_outer}>
        <div className={`mt-5 text-center container ${styles.Hero_section}`}>
          <h1 className="px-2">
            <span>ナ</span>hink things through
          </h1>
          <h3 className={`px-2 mt-3 ${styles.title}`}>
            A daily long-form essay to make you smarter about technology,
            productivity, and AI. Trusted by 80K+ builders.
          </h3>
          {technologies.map((i) => {
            return (
              <Link
                href="./email-verification"
                className="d-block mt-3"
                id="btn"
                key={i}
              >
                <button onClick={handleClick}>Start a Trial with {i}</button>
              </Link>
            );
          })}
          {/* <button>Start a Trial</button> */}
          <div className={styles.underline_vedio_container}>
            <video
              id="underline-video"
              width="100%"
              autoPlay={true}
              defaultmuted=""
              playsinline=""
            >
              <source
                src="https://d24ovhgu8s7341.cloudfront.net/static/underline.mp4"
                type="video/mp4"
              ></source>
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}
