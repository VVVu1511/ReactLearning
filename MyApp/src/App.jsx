import Header from './Header.jsx'
import Footer from './Footer.jsx';
import Food from './Food/Food.jsx';
import Card from './Card/Card.jsx';
import Button from './Button/Button.jsx';
import Student from './Student/Student.jsx';
import UserGreeting from './UserGreeting/UserGreeting.jsx';
import List from './List/List.jsx';

import profilePic from './assets/sung_jin_woo.jpg'
import antonyPic from './assets/antony.jpg'


function App() {
  const fruits = [{id: 1,name: "apple", calories: 95}, 
    {id: 2,name: "orange", calories: 45},
    {id: 3,name: "banana", calories: 105},
    {id: 4,name: "coconut", calories: 159}, 
    {id: 5,name: "pineapple", calories: 37}];

    const vegetables = [{id: 6,name: "potatoes", calories: 110}, 
      {id: 7,name: "celery", calories: 15},
      {id: 8,name: "carrots", calories: 25},
      {id: 9,name: "corn", calories: 63}, 
      {id: 10,name: "broccoli", calories: 50}];

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

        <UserGreeting isLoggedIn={true} username="Tuong Vy" />
        
        
        {fruits.length > 0 && <List items = {fruits} category="Fruits"/>}
        {vegetables.length > 0 && <List items = {vegetables} category="Vegetables"/>}

        <Footer />
    </>
  );
}

export default App
