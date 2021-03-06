import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitterSquare, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faShareAlt } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

// const ShareH3 = styled.h3`
//   margin: 0;
// `
const ShareDiv = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  margin-bottom: 35px;
`
const ShareFacebook = styled.a`
  color: #4267b2;
  &:visited {
    color: #4267b2;
  }
`
export const ShareTwitter = styled.a`
  color: #1ea0f1;
  &:visited {
    color: #1ea0f1;
  }
`

const Share = props => {
  const twitter = `https://twitter.com/intent/tweet?url=${props.url +
    props.pathname}&text=${props.title} by @brandonlehr`

  const fb = `https://www.facebook.com/sharer/sharer.php?u=${props.url +
    props.pathname}`

  return (
    <ShareDiv>
      {/* <ShareH3>Share?</ShareH3> */}
      <FontAwesomeIcon icon={faShareAlt} size="2x" style={{ opacity: '.9' }}/>
      <ShareFacebook href={fb} target="blank">
        <FontAwesomeIcon icon={faFacebook} size="3x" />
      </ShareFacebook>
      <ShareTwitter href={twitter} target="blank">
        <FontAwesomeIcon icon={faTwitterSquare} size="3x" />
      </ShareTwitter>
    </ShareDiv>
  )
}

export default Share
