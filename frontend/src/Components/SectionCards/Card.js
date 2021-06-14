import React from 'react'
import './SectionCards.css'

const Card = (props) => {
    const {locked,img,cardTitle,cardDesc} = props;
    return (
        <li class={locked ? "quiz-wrapper locked quiz-item" : "quiz-wrapper quiz-item"}>
                <div class="clickable quiz">
                  <div class="img">
                    <span
                      class="brioche-bg"
                      style={{
                        backgroundImage:
                          `url(${img})`,
                      }}
                    ></span>
                    { locked && <span class="locked" >
                      <span class="icon" >
                        <em
                          class="b-sprite-courses-lock-white"
                          
                        ></em>
                      </span>{" "}
                      <span class="expl" >
                        Included with
                        <br  />
                        Brilliant Premium
                      </span>
                    </span>
                    }
                  </div>
                  <div class="text2">
                      
                    <h4>{cardTitle}</h4>
                    <div>
                      <p>{cardDesc}</p>
                    </div>
                  </div>
                  <div class="progress"></div>
                </div>
              </li>
    )
}

export default Card
