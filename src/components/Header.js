import React from 'react'
import PropTypes from 'prop-types'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-diamond"></span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>ANCHEN HUANG</h1>
        <p>
          Rockstar Full Stack Developer <br /> Versatile in building
          applications with <br />
          <b>React, Express, Firebase, AWS Serverless Architecture</b>
        </p>
        <ul className="icons">
          <li>
            <a
              href="https://www.linkedin.com/in/viewinganchen/"
              className="icon fa-linkedin"
            >
              <span className="label">LinkedIn</span>
            </a>
          </li>
          <li>
            <a href="https://github.com/mikeyqq" className="icon fa-github">
              <span className="label">GitHub</span>
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/AnchenHuang"
              className="icon fa-twitter"
            >
              <span className="label">Twitter</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Work
          </a>
        </li>
        <li>
          <a href="https://www.canva.com/design/DAD1W64Vuqk/WuGMl1QKZ28nbVEQ-WNdCw/view?utm_content=DAD1W64Vuqk&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton">
            Resume
          </a>
        </li>
        <li>
          <a href="mailto:acmhuang@gmail.com">Contact</a>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
