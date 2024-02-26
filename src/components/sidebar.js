import React from 'react'
import styled from 'styled-components'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image";

import FollowMe from './follow-me';

const StyledSidebar = styled.div`
  width: 300px;
  height: 100%;

  @media (max-width: 976px) {
    width: 100%;
    max-width: 600px;
  }
`

const SidebarBlock = styled.div`
  padding: 5px;
  font-size: 0.9rem;
`

export default function Sidebar(props) {
  const data = useStaticQuery(graphql`{
    file(relativePath: {eq: "profilefunky.jpg"}) {
      childImageSharp {
        gatsbyImageData(width: 150, height: 150, placeholder: BLURRED, layout: FIXED)
      }
    }
  }`)

  return (
    <StyledSidebar>
      <SidebarBlock>
        <GatsbyImage
          image={data.file.childImageSharp.gatsbyImageData}
          alt='Brandon Lehr Profile'
          imgStyle={{ borderRadius: '20px', marginRight: 'auto' }} />
      </SidebarBlock>

      <SidebarBlock>
        <FollowMe />
      </SidebarBlock>
      <SidebarBlock>
        <p>
          When I was young, I would tear apart my toys to see how they
          worked. Now that I'm older, I put that curiosity to good use to
          do things like work on my car, learn programming languages, and
          create web apps. Same idea, just more expensive toys!
        </p>

        <p>
          I've spent most of my time learning the usual HTML and CSS,
          JavaScript, Node, React, Flutter, Android, and iOS.{' '}
        </p>

        <ul>
          <li>
            <a href="https://apps.apple.com/us/developer/brandon-lehr/id1461765394" >View all of my iOS Apps</a>
          </li>
          <li>
            <a href="https://play.google.com/store/apps/developer?id=Brandon+Lehr" >View all of my Android Apps</a>
          </li>
          <li>
            <Link to="/alpaca/i-built-this/2018/09/02/alpaca-tracker">
              The Alpaca Tracker
            </Link>
            , free alpaca record keeping software for mobile and web!
          </li>
          <li>
            <Link to="/Android/iOS/Location%20Reminders/2019/05/03/remind-me-when-im-there">
              Remind Me When I'm There
            </Link>
            , Android and iOS location aware reminders!
          </li>
          <li>
            <Link to="/android/i-built-this/2018/10/29/roll-call-attendance-app-for-android">
              Roll Call
            </Link>
            , Attendance Tracking, Made Easy!
          </li>
          <li>
            <Link to="/i-built-this/2016/06/01/pinewoodraceday">
              PinewoodRaceDay.com
            </Link>
            , free software for running and scoring pinewood derby and
            raingutter regatta races. Built with react and redux.
          </li>
          <li>
            <Link to="/i-built-this/wordpress/2015/12/02/introducing-pummel-wordpress-theme">
              Pummel WordPress Theme
            </Link>
            , a highly customizable theme perfect for personal blogs and
            bios.
          </li>
        </ul>
      </SidebarBlock>
    </StyledSidebar>
  );
}
