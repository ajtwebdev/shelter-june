import React from "react";
import styled from "styled-components";
import { Container, Actions } from "./layoutComponents";
import { ButtonPrimary, AnchorInline } from "./buttons";

const Wrapper = styled.div`
  grid-row: 1 / span 2;
  grid-column: 1 / -1;
  z-index: 1;
  background: ${(props) => `url(${props.img})`}, rgba(255, 255, 255, 0.6);
  background-blend-mode: overlay;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 4em 0;

  display: grid;
  place-items: center;
  height: 100%;

  @media screen and (max-width: 26em) {
    min-height: 100vh;
    height: 100%;
  }
`;

const Text = styled.div`
  max-width: 140ch;
  width: 100%;
  color: var(--clr-accent);
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  padding: 4em;
  border: 2px solid var(--clr-accent);
  border-radius: 10px;
`;
export default function Proverb() {
  return (
    <Wrapper img="http://www.wp-content.shelterinplace3.ca/wp-content/uploads/2023/03/IMGP2374-scaled-1.jpg">
      <Container className="spacing">
        <Text className="spacing">
          <div className="">
            <h3 className="subheader italics">
              "Nor is there salvation in any other, for there is no other name
              under heaven given among men by which we must be saved. Acts 4:12"
            </h3>
          </div>
        </Text>
      </Container>
    </Wrapper>
  );
}
