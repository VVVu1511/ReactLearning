import Header from './Header.jsx'
import Footer from './Footer.jsx';
import Food from './Food/Food.jsx';
import Card from './Card/Card.jsx';
import Button from './Button/Button.jsx';
import Student from './Student/Student.jsx';

import profilePic from './assets/sung_jin_woo.jpg'
import antonyPic from './assets/antony.jpg'


function App() {

  return(
    <>
        <Header />
        
        <Card image = {profilePic}/>
        <Card image = {antonyPic}/>
        <Food />
        <Button />

        <Student name="Vu Van Vu" age = {18} isStudent={true}/>
        <Student name="Vu Van Vu" age = {20} isStudent={true}/>
        <Student name="Lam Hoang Linh Dan" age = {20} isStudent={false}/>
        <Student name="Bui Le Thanh Truc" age = {17} isStudent={true} isBeautiful={true}/>
        <Student />
        <Student name="Nguyen Thu Thao"/>

        <Footer />
    </>
  );
}

export default App
