import styles from './Student.module.css'
import PropTypes from 'prop-types'


function Student({name = "Vu Van Vu", age = 0, isBeautiful = false, isStudent = false}){
    return (
        <div className={styles.student}>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Student: {isStudent ? "Yes" : "No"}</p>
            <p>Sexy: {isBeautiful ? "Yes" : "No"}</p>
        </div>
    );
}


Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
    isBeautiful: PropTypes.bool,
}

export default Student;