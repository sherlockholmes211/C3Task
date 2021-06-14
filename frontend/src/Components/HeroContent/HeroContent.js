import React from 'react'
import './HeroContent.css'
const HeroContent = () => {
    return (
      <section className="header">
        <div className="container">
          
          <div className="text">
            <p className="back">
              <a href="/courses/" className="router-link-active">
                <span className="b-sprite-courses-chevron-1-black"></span>
                Back to all courses
              </a>
            </p>
            <h1>Logic</h1>
            <h2>
              Stretch your analytic muscles with knights, knaves, logic gates,
              and more!
            </h2>
            <div>
              <p>
                The beginning of our introductory math journey is Logic. Through
                these challenging problem solving exercises, you'll construct
                the critical thinking skills that are the basis for mathematical
                reasoning.
              </p>

              <p>
                You'll use limited information to make predictions – eliminating
                the impossible to uncover the truth. This course builds up to
                some truly mind-bending challenges!
                <button className="btn-link read-more-button">
                  Read more<span></span>
                </button>
              </p>
            </div>
            <button className="btn-link">
              View prerequisites and next steps
            </button>
          </div>
          <div className="card">
            <div className="img">
              <span
                className="brioche-bg"
                style={{
                  backgroundImage:
                    "url(https://ds055uzetaobb.cloudfront.net/brioche/chapter/logic-HzWHci.png?width=254)",
                }}
              ></span>
            </div>
            <div className="stats stats">
              <div>
                <h3>
                  Interactive
                  <br />
                  quizzes
                </h3>
                <span>37</span>
              </div>
              <div>
                <h3>
                  Concepts and
                  <br />
                  exercises
                </h3>
                <span>265+</span>
              </div>
            </div>
            <button
              className="btn2"
              style={{ backgroundColor: "black", color: "white" }}
            >
              Start Course
            </button>
          </div>
        </div>
      </section>
    );
}

export default HeroContent
