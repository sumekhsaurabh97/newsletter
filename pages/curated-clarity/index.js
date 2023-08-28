import React from "react";


import Card from "../../components/Card";


export default function CuratedClarity() {
  const users_pics = [
    "/assets/images/user_1.png",
    "/assets/images/user_2.png",
    "/assets/images/user_3.png",
    "/assets/images/user_4.png",
    "/assets/images/user_5.png",
    "/assets/images/user_6.png",
  ];
  return (
    <>
      <Card
      collections_name="Curated Clarity"
        heading=" Learn From What Leading Companies Build,
            launch & grow your SaaS business"
        title="600+ validated insights on various aspects of SaaS, from conversion
            to retention, from growth to revenue"
            btn_text ="1324+ Subscribers"
        summary="Every Friday, we summarize one best strategies from the top companies Join 1324+ founders discovering best strategies to grow their SaaS business"
        
        users_pic= {users_pics}
      />
    </>
  );
}
