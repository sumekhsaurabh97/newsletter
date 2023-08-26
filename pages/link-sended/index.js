import React from 'react'

import styles from "./styles/link-sended.module.scss"

export default function index() {
  return (
    <div
      className={`d-flex justify-content-center align-items-center ${styles.magicLink_container}`}
    >
      <div className={`py-5 px-5 m-3 ${styles.magicLink_popup}`}>
        <p className={`pb-5`}>
          💫 We can't wait to have you as an official member of our community
          and share with you the magic that lies within. Prepare to be amazed,
          inspired, and entertained! 🎊😄
        </p>
      </div>
    </div>
  )
}
