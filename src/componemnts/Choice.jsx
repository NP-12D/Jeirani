import styles from "./Choice.module.css"
export default function Choice({icon, name}) {
    return(<>
    <div className={styles.choice}>
        <p>{name}</p>
        <p>{icon}</p>
       
    </div>
    
    
    </>)
}