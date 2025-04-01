import styles from './UserGreeting.module.css'
import PropTypes from 'prop-types'

function UserGreeting(props){
    const welcomeMessage = <h2 className={styles.loginPrompt}>
                            Welcome {props.username}
                            </h2>;          

    const loginPrompt = <h2 className={styles.welcomeMessage}>
                        Please log in baby!
                        </h2>;          
    
    return props.isLoggedIn ? welcomeMessage : loginPrompt;
}

UserGreeting.proptypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string
}

export default UserGreeting