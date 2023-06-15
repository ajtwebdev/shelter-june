import React from "react";
import styled from "styled-components";
import FinanceBanner from "./financeBanner";
import ContactBanner from "./contactBanner";
import Footer from "./footers/footer";
import GoogleBadge from "./googleBadge";
import HeaderBasic from "./headers/header";
import Seo from "./seo";
import Proverb from "./proverb";
import RecentPostsData from "./recent-posts/index";

const Wrapper = styled.div`
  position: relative;
`;

export default function LayoutJs({ children }) {
  return (
    <Wrapper>
      <Seo
        title="Shelter in Place"
        description="This Site Is Meant To Encourage Believers In God’s Word, And To Persuade Seekers Of The Truth To Explore The Pages Of The Word."
      />
      <HeaderBasic />
      <main>{children}</main>
      <RecentPostsData />
      <Proverb />
      <Footer />
    </Wrapper>
  );
}
