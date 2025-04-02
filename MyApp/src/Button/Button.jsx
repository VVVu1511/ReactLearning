import styles from './Button.module.css'

function Button(){
    let count = 0;
    
    const handleClick = (name) => {
        if(count < 3){
            count++;
            console.log(`${name} you clicked me ${count} time/s`);
        }
        else{
            console.log(`${name} stop clicking me`);
        }
    };

    const handleClick2 = (name) => {
        console.log(`${name} stop clicking me`)
    }

    const handleClick3 = (e) => {
        e.target.textContent = "OUCH"
    };

    return (
        <button onDoubleClick = {(e) => handleClick3(e)} className={styles.button}>Click me</button>
    );
}

export default Button