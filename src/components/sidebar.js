import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

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
  font-size: .9rem;
`

export default function Sidebar(props) {
  return (
    <StaticQuery
      query={graphql`
        query {
          file(relativePath: { eq: "profilefunky.jpg" }) {
            childImageSharp {
              fixed(width: 150, height: 150) {
                ...GatsbyImageSharpFixed_withWebp_tracedSVG
              }
            }
          }
        }
      `}
      render={data => {
        return (
          <StyledSidebar>
            <SidebarBlock>
              <Img
                fixed={data.file.childImageSharp.fixed}
                imgStyle={{ borderRadius: '20px', marginRight: 'auto' }}
              />
            </SidebarBlock>

            {/* <SidebarBlock>
              <p>
                I'm a web developer, machinist, and sometimes mechanic (when the
                truck breaks down). I guess you could say that I enjoy solving
                problems and building things.
              </p>
            </SidebarBlock> */}
            <SidebarBlock>
              <p>
                When I was young, I would tear apart my toys to see how they
                worked. Now that I'm older, I put that curiosity to good use to
                do things like work on my car, learn programming languages, and
                create web apps. Same idea, just more expensive toys!
              </p>

              <p>
                I've spent most of my time learning the usual HTML and CSS,
                JavaScript, Node, React, Android, and iOS.{' '}
              </p>

              <ul>
                <li>
                  <Link to="/alpaca/i-built-this/2018/09/02/alpaca-tracker">
                    The Alpaca Tracker
                  </Link>
                  , free alpaca record keeping software for mobile and web!
                </li>
                <li>
                  <Link to="/android/i-built-this/2018/11/25/remind-me-when-i-get-there">
                    Remind Me When I'm There
                  </Link>
                  , Android location aware reminders!
                </li>
                <li>
                  <Link to="/android/i-built-this/2018/10/29/roll-call-attendance-app-for-android">
                    Roll Call
                  </Link>
                  , Attendance Tracking, Made Easy!
                </li>
                <li>
                  <Link to="/i-built-this/2015/05/12/whendidiwork-a-time-clock-app">
                    whendidiwork.com
                  </Link>
                  , a time tracking web app using Angular, Node, and Google Apis
                  and now on{' '}
                  <a href="https://play.google.com/store/apps/details?id=com.brandonlehr.whendidiwork">
                    Android
                  </a>
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
                <li>
                  <Link to="/i-built-this/2015/05/15/wchscouts-com-cub-boy-scout-website-for-washington-ch-oh">
                    Scout Website
                  </Link>
                  , this is the website for Troop and Pack 112. It features a
                  JavaScript powered quiz to help the boys learn the Scout Oath
                  and Law.
                </li>
              </ul>

              <p>
                If you have found any of this intriguing, or appalling, feel
                free to reach out to me on{' '}
                <a href="https://twitter.com/brandonlehr">
                  <i className="fab fa-twitter-square" aria-hidden="true" /> twitter
                </a>{' '}
                or by{' '}
                <a href="mailto:blehr.mail@gmail.com">
                  <i className="fas fa-envelope-square" aria-hidden="true" /> email
                </a>
              </p>
            </SidebarBlock>
          </StyledSidebar>
        )
      }}
    />
  )
}
