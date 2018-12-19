import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import Clock from './clock'

const StyledHeader = styled.div`
  position: relative;
  background: #2196f3;
  width: 100%;
  height: 325px;
  margin-bottom: 20px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`

const HeaderContent = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  h1 {
    text-align: center;
    margin: 0;
    margin-top: 0.5rem;
    margin-bottom: 1.5rem;
  }
`

const HeaderSceneDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <HeaderContent>
      <h1>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <HeaderSceneDiv>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="200"
          height="200"
          viewBox="0 0 135.467 135.467"
        >
          <g
            fill="none"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="20.798"
            color="#000"
          >
            <path
              strokeWidth=".79385966"
              d="M70.766 85.67a2.963 2.963 0 0 0-2.978 2.91 2.853 2.853 0 0 0 2.978-2.91zM68.013 89.32a.385.385 0 0 0-.039.001 3.337 3.337 0 0 0-3.296 3.333c0 .154-.057.423-.144.73-.085.3-.195.628-.292.9-.3.846-.865 1.566-1.374 2.363-.507.795-.953 1.676-.953 2.816a6.102 6.102 0 0 0 3.617 5.573c.418.186.848.178 1.257.14.409-.038.813-.105 1.224-.105.404 0 .803.068 1.207.107.404.04.83.052 1.244-.13a6.106 6.106 0 0 0 3.598-4.806 3.918 3.918 0 0 1-2.547-6.775c-.008-.028-.018-.056-.025-.084-.086-.305-.143-.574-.143-.729a3.338 3.338 0 0 0-3.335-3.335z"
            />
          </g>
          <g>
            <path
              fill="none"
              stroke="#fff"
              strokeLinejoin="round"
              strokeWidth=".794"
              d="M50.554 53.351c-9.912 1.774-16.766 6.605-20.883 14.174l-11.812-.189c-2.714.668-4.08 2.818-3.874 4.725l10.489 49.893c.732 2.788 2.217 3.068 3.685 3.402l77.296-.284c2.127-.043 3.798.104 4.442-3.401l10.3-48.76c.944-3.198-2.917-5.428-3.97-5.102.443-.095-7.496-.19-11.244-.284-4.79-9.074-12.86-12.72-21.167-13.89-4.58 13.62-31.759 10.324-33.262-.284z"
            />
            <path
              fill="none"
              stroke="#fff"
              strokeWidth=".794"
              d="M66.996 3.836c-12.92.33-19.772 9.714-21.166 19.844-1.292 17.213 8.515 31.72 19.843 32.412 15.624.303 23.052-21.901 21.167-34.396-2.427-11.08-9.124-17.096-19.844-17.86z"
            />
            <path
              fill="none"
              stroke="#fff"
              strokeLinejoin="round"
              strokeWidth=".794"
              d="M24.367 131.203a2.162 2.162 0 0 1-1.878-1.115 2.162 2.162 0 0 1 .051-2.183 2.162 2.162 0 0 1 1.93-1.024M109.81 126.975a2.117 2.117 0 0 1 1.934.995 2.117 2.117 0 0 1 .038 2.173 2.117 2.117 0 0 1-1.897 1.062"
            />
            <path
              fill="none"
              stroke="#fff"
              strokeWidth=".794"
              d="M24.47 126.881l85.34.094M24.367 131.203l85.518.002M29.671 67.525h75.312"
            />
            <path
              stroke="#fff"
              strokeLinejoin="round"
              strokeWidth=".926"
              d="M58.648 30.059a7.44 4.63 0 0 1-.035 0"
              opacity=".9"
            />
            <circle
              cx="59.295"
              cy="28.074"
              r="2.882"
              fill="#fff"
              stroke="#fff"
              strokeLinejoin="round"
              strokeWidth="1.587"
            />
            <circle
              className="left-eye"
              cx="73.375"
              cy="27.98"
              r="2.882"
              fill="#fff"
              stroke="#fff"
              strokeLinejoin="round"
              strokeWidth="1.587"
            />
            <g className="pupil">
              <circle
                cx="59.248"
                cy="28.688"
                r=".85"
                stroke="#0069c0"
                strokeLinejoin="round"
                strokeWidth="1.058"
              />
              <circle
                id="left-pupil"
                className="left"
                cx="73.327"
                cy="28.594"
                r=".85"
                stroke="#0069c0"
                strokeLinejoin="round"
                strokeWidth="1.058"
              />
            </g>
          </g>
        </svg>

        <Clock />
      </HeaderSceneDiv>
    </HeaderContent>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
