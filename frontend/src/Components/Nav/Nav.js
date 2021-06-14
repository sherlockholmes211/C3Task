import React from 'react'
import './Nav.css'
const Nav = () => {
    return (
      <div className="site-header">
        <div className="container">
          <nav class="hdr-links">
            <div class="hdr-logo">
              <a href="/"class="b-sprite-global-brilliant-logo router-link-active">Brilliant</a>
            </div>
            <div class="headerlink-wrapper">
              <a href="/daily-problems/" class="hdr-link">Today</a>
              <a href="/courses/" class="active hdr-link">Courses</a>
              <span class="hdr-link">Practice</span>
              <div class="hdr-search"></div>
              <span class="hdr-login">
                <a href="/#login" rel="nofollow" class="btn login-link">Log in</a>
                <a href="/#sign-up" class="btn signup-btn">Sign up</a>
              </span>
            </div>
          </nav>
        </div>
      </div>
    );
}

export default Nav
