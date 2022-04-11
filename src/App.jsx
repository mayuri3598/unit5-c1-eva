import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [score, setScore] = useState(0);
  const [wicket, setWicket] = useState(0);
  const [over, setOver] = useState(0);

  const addWicket = (value) => {
    setWicket(wicket + value)
  }

  const addScore = (value) => {
    setScore(score + value);
  }
  const addBall = (value) =>{
    setOver(over + value);
  }
  return (
    <div className="App">
      <h3>India:</h3>
      <div className="banner">
        <div>
          Score:{" "}
          <h1 className="scoreCount">
            {
              score
            }
          </h1>
        </div>
        <div>
          Wicket:{""}
          <h1 className="wicketCount">
            {
              wicket
            }
          </h1>
        </div>

        <div>
          Over:{" "}
          <h1 className="overCount">
            {
              over
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
            }
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button className="addScore1"  onClick={() => {
          addScore(1);
        }}>Add 1</button>
        <button className="addScore4"  onClick={() => {
          addScore(4);
        }}>Add 4</button>
        <button className="addScore6"  onClick={() => {
          addScore(6);
        }}>Add 6</button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button onClick={() => {
          addWicket(1);
        }}>Add 1 wicket</button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button onClick={() =>{
          addBall(1)
        }}>Add 1</button>
      </div>

      { 
      /* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */}
    </div>
  );
}

export default App;