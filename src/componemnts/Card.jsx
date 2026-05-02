import styles from "./Card.module.css"


export default function Card({icon ,onClick}) {

return (
    <>
    <div className={styles.card} onClick={onClick} >
       <p>{icon}</p>
    </div>
    </>
) 

}
