import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";

import Header from "../../components/Header";

import styles from "./styles/refral.module.scss";

export default function index() {
  const [url, setUrl] = useState(null);
  const [count, setCount] = useState(0);
  const [remaining_time, setRemaining_time] = useState(0);

  useEffect(() => {
    fetchShareDetail();
    urlRequest();
  }, []);

  const urlRequest = async () => {
    const res = await axios
      .post("https://newsletter12.pythonanywhere.com/api/share_url", {
        user_id: "8309b4af-08bf-4321-94f6-15301f138b00",
      })
      .then(
        (response) => {
          setUrl(response.data.data.url);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  const fetchShareDetail = async () => {
    const res = await axios
      .post("https://newsletter12.pythonanywhere.com/api/fetch_share_details", {
        user_id: "8309b4af-08bf-4321-94f6-15301f138b00",
      })
      .then(
        (response) => {
          setCount(response.data.data.count);
          setRemaining_time(response.data.data.remaining_time);
        },
        (error) => {}
      );
  };

  const copyUrl = async () => {
    await navigator.clipboard.writeText(url);
  };
  return (
    <>
      <Header />
      <div className="container-fluid" style={{ backgroundColor: "#F9F6EF" }}>
        <div className="container pt-5">
          <div
            className={`d-flex justify-content-lg-between align-items-center py-3 px-4 ${styles.refral_container}`}
          >
            <div className={styles.remaining_days}>
              <p className="m-0">This Month Referrals</p>
              <p className="py-1 m-0" style={{ color: "red" }}>
                {`${remaining_time} Days remaining`}
              </p>
              <p className="m-0 mt-2">
                Get access to the apple’s PowerPoint Presentation Template
              </p>
              <p className="py-1 m-0">
                Get 25 referrals before the end of the month
              </p>
            </div>
            <div className={styles.btn}>
              <h3>{count}/30 Referral</h3>
              <button className="py-2 px-5" onClick={copyUrl}>
                <span className="px-5">Copy your URL</span>
              </button>
            </div>
          </div>
          <div className={styles.latest_issues_section}>
            <h3 className="text-center mt-5 pt-5 mb-4">Latest Issue</h3>
            <h2 className="text-center mb-5">
              Insights#20 Simple Sign up and 334.5% increase in conversion
            </h2>
            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis
              ultrices est. Suspendisse ut dolor risus. Integer pretium, nisi eu
              bibendum dictum, diam risus rhoncus eros, id tempor ex magna ut
              felis.
            </p>
            <p className="mt-4">
              Quisque dictum ante volutpat justo aliquam consequat. Phasellus
              sit amet auctor est. Mauris tellus odio, bibendum ac laoreet in,
              consectetur in ex.
            </p>
            <p className="mt-4">
              Aliquam porttitor, libero nec lacinia accumsan, odio purus
              volutpat odio, vel pellentesque neque massa sit amet augue
            </p>
            <div
              className={`mt-5 mb-5 d-flex justify-content-center align-items-center ${styles.desktop_screen}`}
            >
              <h2>desktop</h2>
            </div>
            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis
              ultrices est. Suspendisse ut dolor risus. Integer pretium, nisi eu
              bibendum dictum, diam risus rhoncus eros, id tempor ex magna ut
              felis.
            </p>
            <p className="mt-4">
              Quisque dictum ante volutpat justo aliquam consequat. Phasellus
              sit amet auctor est. Mauris tellus odio, bibendum ac laoreet in,
              consectetur in ex.
            </p>
            <p className="mt-4 mb-5">
              Aliquam porttitor, libero nec lacinia accumsan, odio purus
              volutpat odio, vel pellentesque neque massa sit amet augue.
            </p>
          </div>
          <div className="d-flex justify-content-center mb-5">
            <div className={`d-flex  mt-5  ${styles.social_media}`}>
              <div className={`px-5 pt-3 pb-3 ${styles.facebook}`}>
                <span className="me-3">FACEBOOK</span>
                <Link href={""}>
                  <FacebookIcon style={{ color: "black" }} />
                </Link>
              </div>
              <div className={`px-5 pt-3 pb-3 ${styles.twitter}`}>
                <span className="me-3">TWITTER</span>
                <Link href={""}>
                  <TwitterIcon style={{ color: "black" }} />
                </Link>
              </div>
              <div className={`px-5 pt-3 pb-3 ${styles.linkedin}`}>
                <span className="me-3">LINKEDIN</span>
                <Link href={""}>
                  <LinkedInIcon style={{ color: "black" }} />
                </Link>
              </div>
            </div>
          </div>

          <div className={`mt-5 pb-5 text-center ${styles.load_more}`}>
            <Link href={""}>
              <p>Load More Archive</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
