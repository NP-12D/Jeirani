import styles from "./WinLose.module.css"
export default function WinLose({name,score}) {
    return(<>
  <div className={styles.winlose}>
      <p>{name} - {score}</p>
  </div>


    </>)
}