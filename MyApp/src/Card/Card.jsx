import styles from './Card.module.css'

function Card({image}){
    return (
        <div className = {styles.card}>
            <img className = {styles.cardImage} src = {image} alt = "profile picture"></img>
            <h2 className = {styles.cardTitle}>Vu Vu</h2>
            <p className = {styles.cardText}>I study and watch anime</p>
        </div>
    );
}


export default Card