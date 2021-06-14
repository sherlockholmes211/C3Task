import './App.css';
import Nav from './Components/Nav/Nav.js'
import HeroContent from './Components/HeroContent/HeroContent'
import SectionCards from './Components/SectionCards/SectionCards';
import LastComponent from './Components/LastComponent/LastComponent';
function App() {

  const data = [
    {
      img:"https://ds055uzetaobb.cloudfront.net/brioche/chapter/Warmup_Puzzles-T6zgwD-6TgfYy.png?width=280",
      cardTitle:"Warmup Puzzles",
      cardDesc:"Get started with some logic warmups."
    },
    {
      img:"https://ds055uzetaobb.cloudfront.net/brioche/chapter/Truth-Seeking-c83EPA.png?width=280",
      cardTitle:"Truth-Seeking",
      cardDesc:"Who or what is telling the truth?"
    },
    {
      img:"https://ds055uzetaobb.cloudfront.net/brioche/chapter/Machine_Logic_and_Strategy-jrTuIK-2FIeRk.png?width=280",
      cardTitle:"Strategic Deductions",
      cardDesc:"Stretch the information you're given as far as it can go!"
    },
  ];


  const data2 = [
    {
      img:"https://ds055uzetaobb.cloudfront.net/brioche/chapter/Riddles_of_Order-uVO6uP.png?width=280",
      cardTitle:"Riddles of Order",
      cardDesc:"What order do these racers finish in?"
    },
    {
      img:"https://ds055uzetaobb.cloudfront.net/brioche/chapter/Crafty_Counting-MyeNyB.png?width=280",
      cardTitle:"Crafty Counting",
      cardDesc:"Learn strategies for counting that go far beyond just counting."
    },
    {
      img:"https://ds055uzetaobb.cloudfront.net/brioche/chapter/Mystery_Containers-jce39Z.png?width=280",
      cardTitle:"Futoshiki",
      cardDesc:"Arrange the numbers to match the inequalities."
    },
    {
      img:"https://ds055uzetaobb.cloudfront.net/brioche/chapter/Futoshiki-bNVmO9.png?width=280",
      cardTitle:"Shuffles",
      cardDesc:"Where did everything get shuffled to?"
    },
    {
      img:"https://ds055uzetaobb.cloudfront.net/brioche/chapter/Shuffles-GgH8Ox.png?width=280",
      cardTitle:"Mystery Containers",
      cardDesc:"What's in each of these mystery boxes?"
    },
    {
      img:"https://ds055uzetaobb.cloudfront.net/brioche/chapter/False_Information-WRykiD.png?width=280",
      cardTitle:"False Information",
      cardDesc:"Solve problems where the people giving you hints might be lying."
    },
  ];

  return (
    <div className="App">
      <Nav/>
      <HeroContent/>
        <SectionCards chapterNum={"1"} chapterTitle={"Introduction"} chapterDesc={"Put your logic to the test with these warmups!"} data={data} locked={false} />
        <SectionCards chapterNum={"2"} chapterTitle={"The Rational Detective"} chapterDesc={"Eliminate the impossible and uncover the truth!"} data={data2} locked={true} />
        <SectionCards chapterNum={"3"} chapterTitle={"Puzzles and Riddles"} chapterDesc={"Even trickier puzzles and the tools you need to solve them."} data={data2} locked={true} />
        <SectionCards chapterNum={"4"} chapterTitle={"Multi-Level Thinking"} chapterDesc={"If you know that I know that you know... what then?"} data={data2} locked={true} />
        <SectionCards chapterNum={"5"} chapterTitle={"Competitive Games"} chapterDesc={"What will your opponent do? Logic it out!"} data={data2} locked={true} />
        <SectionCards chapterNum={"6"} chapterTitle={"Logic Machines"} chapterDesc={"Turn logic into arithmetic machines."} data={data2} locked={true} />
        <SectionCards chapterNum={"7"} chapterTitle={"Advanced Knights and Knaves"} chapterDesc={"Uncover liars on this island of logic!"} data={data2} locked={true} />

      <LastComponent/>
    </div>
  );
}

export default App;
