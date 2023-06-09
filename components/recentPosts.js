import React from "react";
import { Section, Container, GridThree } from "./layoutComponents";
import styled from "styled-components";
import { useRecentPosts } from "../hooks/useRecentPosts";
import { ButtonInline } from "./buttons";
import Image from "./Image";

const Text = styled.div`
  text-align: center;
`;

const Article = styled.article`
  div {
    padding: 2em;
    background: var(--clr-accent);
  }

  h3 {
    color: var(--txt-light);
  }

  .bold {
    color: var(--clr-tan);
  }
`;

const StyledImg = styled(GatsbyImage)`
  width: 100%;
  height: 400px;
  object-fit: cover;
`;

export default function RecentPosts() {
  let width = "100%";
  let height = "400px";

  const data = useRecentPosts();
  return (
    <Section>
      <Container className="spacing">
        <Text>
          <h2 className="title">recent landscaping articles</h2>
        </Text>
        <GridThree>
          {data.allWpPost.nodes.map((post) => {
            return (
              <Article className="">
                {post.featuredImage ? (
                  <Image
                    alt={post.image.altText || ""}
                    srcSet={post.image.srcSet}
                    src={post.image.src}
                    width={width}
                    height={height}
                  />
                ) : null}
                <div>
                  <h3 className="subheader">{post.title}</h3>
                  <ButtonInline className="bold" href={post.uri}>
                    Read more &#8594;
                  </ButtonInline>
                </div>
              </Article>
            );
          })}
        </GridThree>
      </Container>
    </Section>
  );
}
