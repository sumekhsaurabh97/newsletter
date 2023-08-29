import Head from "next/head";
import HomePage from "./home-page";
import Refferal from "./referral"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hero Curators</title>
        <link rel="shortcut icon" href="/assets/images/logo.png" />
        <meta name="description" content="Generated by create next app" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Domine:wght@400;500&family=Hepta+Slab&family=McLaren&family=Merriweather:ital,wght@0,400;1,400;1,900&family=PT+Sans&family=PT+Sans+Caption:wght@700&family=Poppins:ital,wght@0,100;0,200;0,500;1,100&family=Roboto:ital,wght@0,300;1,900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <HomePage />
      <Refferal/>
    </div>
  );
}
