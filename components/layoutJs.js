import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Footer from "./footers/footer";
import HeaderBasic from "./headers/header";
import Seo from "./seo";
import Proverb from "./proverb";
import RecentPostsData from "./recent-posts/index";
import { getProverbData } from "../lib/api";

const Wrapper = styled.div`
  position: relative;
`;

export default function LayoutJs({ children }) {
  const [proverbData, setProverbData] = useState({});
  useEffect(() => {
    async function getProverb() {
      const data = await getProverbData();
      setProverbData(data?.generalSettings);
    }
    getProverb();
  }, []);
  return (
    <Wrapper>
      <Seo
        title="Shelter in Place"
        description="This Site Is Meant To Encourage Believers In God’s Word, And To Persuade Seekers Of The Truth To Explore The Pages Of The Word."
      />
      <HeaderBasic proverb={proverbData?.proverb} />
      <main>{children}</main>
      <RecentPostsData />
      <Proverb proverb={proverbData?.proverb} img={proverbData?.proverbImg} />
      <Footer />
    </Wrapper>
  );
}
