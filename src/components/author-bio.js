import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image";
import FollowMe from './follow-me'

const AuthorBioDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-height: 150px;
  margin-bottom: 25px;

  @media (max-width: 650px) {
    flex-direction: column;
  }
`

const BioWordsDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-height: 150px;
  padding-left: 8px;
`

const BioWordsStyle = styled.div`
  p {
    margin: 0;
  }
  span {
    font-size: .85rem;
    opacity: .7;
  }
`

export default function AuthorBio() {
  const data = useStaticQuery(graphql`{
    file(relativePath: {eq: "profilefunky.jpg"}) {
      childImageSharp {
        gatsbyImageData(width: 150, height: 150, placeholder: BLURRED, layout: FIXED)
      }
    }
  }`)
  return (
    <AuthorBioDiv>
      <div>
        <GatsbyImage
          image={data.file.childImageSharp.gatsbyImageData}
          imgStyle={{ borderRadius: '20px' }} />
      </div>
      <BioWordsDiv>
        <FollowMe />
        <BioWordsStyle>
          <p>I'm Brandon Lehr, your friendly, neighborhood developer</p>

          <span>
            &#10033; May or may not be friendly, most likely not your neighbor
          </span>
        </BioWordsStyle>
      </BioWordsDiv>
    </AuthorBioDiv>
  );
}
