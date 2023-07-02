import React from "react";
import Link from "next/link";

import styles from "./styles/hero.module.scss";
import Header from "../../components/header";

export default function Hero() {
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
          productivity, and AI. 
          Trusted by 80K+ builders.
        </h3>

        <Link href="./email-verification">
          <button>Start a Trial</button>
        </Link>
        {/* <button>Start a Trial</button> */}
        <div className={styles.underline_vedio_container}>
          <video
            id="underline-video"
            width="100%"
            autoplay="true"
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
