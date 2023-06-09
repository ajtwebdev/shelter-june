import React from "react";
import styled from "styled-components";
import FinanceBanner from "./financeBanner";
import ContactBanner from "./contactBanner";
import Footer from "./footers/footer";
import GoogleBadge from "./googleBadge";
import HeaderBasic from "./headers/header";
import Seo from "./seo";
import Proverb from "./proverb";

const Wrapper = styled.div`
  position: relative;
`;

export default function LayoutJs({ children }) {
  return (
    <Wrapper>
      <Seo title="Shelter in Place" />
      <HeaderBasic />
      <main>{children}</main>
      <Proverb />
      <Footer />
    </Wrapper>
  );
}
