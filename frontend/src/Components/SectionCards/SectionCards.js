import React , { useState } from "react";
import './SectionCards.css'
import Card from "./Card";
const SectionCards = (props) => {
  const {locked,chapterNum,chapterTitle,chapterDesc,data} = props;
  const [expand, setexpand] = useState(false)

  const Cards = data.map((item)=>{
    return(
      <Card  locked = {locked} img={item.img} cardTitle={item.cardTitle} cardDesc={item.cardDesc}/>
    )
  })

    return (
      <div class="chapter">
        <header class="container">
          <div class="chapter-number">
            <span style={{ color: "#758bff" }}>{chapterNum}</span>
            <svg
              width="32"
              height="33"
              viewBox="0 0 32 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M32 16C32 28.5 20.8366 33 12 33C3.16344 33 0 22.8366 0 14C0 5.16344 8.16344 0 17 0C25.8366 0 32 7.16344 32 16Z"
                fill="#758bff"
              ></path>
            </svg>
          </div>
          <div>
            <h3>{chapterTitle}</h3>
            <p>
              {chapterDesc}
              {expand && 
                <button onClick={()=>setexpand(!expand)} data-v-69f3b23e="" class="btn-link">
                Collapse
              </button>
              }
              
            </p>
          </div>
        </header>

        <div class={expand ? "quizzes expanded" : "quizzes"}>
          <div class="container">
            <ol class="unstyled">
              {Cards}
            </ol>
            {!expand && (
              <button
                onClick={() => setexpand(!expand)}
                class="expand-chapter"
                data-v-69f3b23e=""
              >
                <span
                  class="b-sprite-global-chevron-right"
                  data-v-69f3b23e=""
                ></span>
              </button>
            )}
          </div>
        </div>
      </div>
    );
}

export default SectionCards
