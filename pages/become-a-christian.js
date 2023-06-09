import React from "react";
import Banner from "../components/banners/banner";
import FormContact from "../components/Forms/FormContact";
import LayoutJs from "../components/layoutJs";
import ImageRight from "../components/Sections/imageRight";
import Seo from "../components/seo";
import Curse from "../components/curse";

export default function BecomeChristian() {
  return (
    <LayoutJs>
      <Seo
        title="Become a Christian - Shelter in Place"
        description="You can contact us on this page using the form if you are interested in becoming a Christian."
      />
      <Banner
        img="http://www.wp-content.shelterinplace3.ca/wp-content/uploads/2023/03/IMGP2377-scaled-1.jpg"
        title="interested in becoming a christian?"
        subheader="shelter in place"
        description="Let us help you become the person you want to be."
      />
      <ImageRight />
      <Curse />
      <FormContact />
    </LayoutJs>
  );
}
