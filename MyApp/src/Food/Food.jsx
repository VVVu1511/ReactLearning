import styles from './Food.module.css'

function Food(){

    const food1 = "Orange";
    const food2 = "Banana";

    return (
        <ul className={styles.foodList}>
            <li className={styles.foodItem}>Apple</li>
            <li className={styles.foodItem}>{food1}</li>
            <li className={styles.foodItem}>{food2.toUpperCase()}</li>
        </ul>
    );
}

export default Food