import Button from "../componemnts/Button";
import Card from "../componemnts/Card";
import Choice from "../componemnts/Choice";
import WinLose from "../componemnts/WinLose";
import styles from "./MainPage.module.css";
import { useState,useEffect } from "react";

export default function MainPage() {
  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [winNumber, setWinNumber] = useState(0);
  const [loseNumber, setLoseNumber] = useState(0);
  const [tiesNumber, setTiesNumber] = useState(0);
  const[winer,setWinner]=useState("Let's see who wins!")

  const choices = ["✊", "✌", "✋"];
  function handleComputerChoice() {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);
  }
useEffect(() => {
  if (!playerChoice || !computerChoice) return;
  if (playerChoice === computerChoice) {
    setTiesNumber(prev => prev + 1);
    setWinner("It's a tie!");
  } else if (
    (playerChoice === "✊" && computerChoice === "✌") ||
    (playerChoice === "✌" && computerChoice === "✋") ||
    (playerChoice === "✋" && computerChoice === "✊")
  ) {
    setWinNumber(prev => prev + 1);
    setWinner("You win!");
  } else {
    setLoseNumber(prev => prev + 1);
    setWinner("You lose!");
  }
}, [playerChoice, computerChoice]);


  return (
    <>
      <h1 className={styles.title}>Rock Paper Scissors Game</h1>
      <div className={styles.cardcont}>
        <Card
          icon="✊"
          onClick={() => {
            setPlayerChoice("✊"), handleComputerChoice();
          }}
        />
        <Card
          icon="✌"
          onClick={() => {
            setPlayerChoice("✌"), handleComputerChoice();
          }}
        />
        <Card
          icon="✋"
          onClick={() => {
            setPlayerChoice("✋"), handleComputerChoice();
          }}
        />
      </div>
      <h2 className={styles.h2}> {winer}</h2>
      <div className={styles.choicecont}>
        <Choice name="Your choice:" icon={playerChoice} />
        <Choice name="Computer choice:" icon={computerChoice} />
      </div>
      <div className={styles.winlose}>
        <WinLose name="Win number" score={winNumber} />
        <WinLose name="Lose number" score={loseNumber} />
        <WinLose name="Ties number" score={tiesNumber} />
      </div>

      <Button name="Reset" onClick={() => {    setPlayerChoice("");
    setComputerChoice("");
    setWinNumber(0);
    setLoseNumber(0);
    setTiesNumber(0);
    setWinner("Let's see who wins!");
}} />
    </>
  );
}
