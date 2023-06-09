import React from "react";
import Banner from "../components/banners/banner";
import FormContact from "../components/Forms/FormContact";
import LayoutJs from "../components/layoutJs";
import Seo from "../components/seo";

export default function Contact() {
  return (
    <LayoutJs>
      <Seo
        title="Contact Us - Shelter in Place"
        description="You can contact us on this page using the form."
      />
      <Banner
        img="http://www.wp-content.shelterinplace3.ca/wp-content/uploads/2023/03/IMGP2860-scaled-1.jpg"
        title="contact us here"
        subheader="shelter in place"
        description="Have questions about becoming a Christian? Or questions or comments about anything? Please share them in the form below."
      />
      <FormContact title="Contact" />
    </LayoutJs>
  );
}
