import React, {useState, useEffect} from "react"


function MyComponent(){

    // const [name, setName] = useState("");
    // const [quantity, setQuantity] = useState();
    // const [comment, setComment] = useState("");
    // const [payment, setPayment] = useState("");
    // const [shipping, setShipping] = useState("");

    // const [age, setAge] = useState(0);
    // const [isEmployed, setIsEmployed] = useState(false);

    // const updateName = () => {
    //     setName("Vu");
    // };

    // const incrementAge = () => {
    //     setAge(age + 1);
    // };

    // const decrementAge = () => {
    //     setAge(age - 1);
    // }

    // const toggleEmployedStatus = () => {
    //     setIsEmployed(!isEmployed);
    // };

    // function handleNameChange(event){
    //     setName(event.target.value);
    // }

    // function handleQuantityChange(event){
    //     setQuantity(event.target.value);
    // }

    // function handleCommentChange(event){
    //     setComment(event.target.value);
    // }

    // function handlePaymentChange(event){
    //     setPayment(event.target.value);
    // }

    // function handleShippingChange(event){
    //     setShipping(event.target.value);
    // }

    // return (
    //     <div>
    //         <input value={name} onChange={handleNameChange}></input>

    //         <p>Name: {name}</p>

    //         <input value={quantity} onChange={handleQuantityChange} type="number" min={0}></input>

    //         <p>Quantity: {quantity}</p>

    //         <textarea value={comment} onChange={handleCommentChange} placeholder="Enter delivery instructions"></textarea>
    //         <p>Comment: {comment}</p>

    //         <select value={payment} onChange={handlePaymentChange}>
    //             <option value="">Select an option</option>
    //             <option value="Visa">Visa</option>
    //             <option value="Mastercard">Mastercard</option>
    //             <option value="Giftcard">Giftcard</option>
    //         </select>

    //         <p>Payment: {payment}</p>

    //         <label>
    //             <input type = "radio" value = "Pick Up" 
    //                     checked = {shipping === "Pick Up"} 
    //                     onChange={handleShippingChange}>
    //                     </input>
    //             Pick Up
    //         </label>

    //         <br></br>

    //         <label>
    //         <input type = "radio" value = "Delivery" 
    //                     checked = {shipping === "Delivery"} 
    //                     onChange={handleShippingChange}>
    //                     </input>
    //             Delivery
    //         </label>
    //         <p>Shipping: {shipping}</p>
    //     </div>
    // );

    // const [cars, setCars] = useState([]);
    // const [carYear, setCarYear] = useState(new Date().getFullYear());
    // const [carMake, setCarMake] = useState("");
    // const [carModel, setCarModel] = useState("");

    // function handleAddCar(){
    //     const new_car = {year: carYear, make: carMake, model: carModel};
    //     setCars(c => [...c,new_car]);

    //     setCarYear(new Date().getFullYear());
    //     setCarMake("");
    //     setCarModel("");
    // }

    // function handleRemoveCar(index){
    //     setCars(c => c.filter((_,i) => i != index));
    // }

    // function handleYearChange(event){
    //     setCarYear(event.target.value);
    // }

    // function handleMakeChange(event){
    //     setCarMake(event.target.value);
    // }

    // function handleModelChange(event){
    //     setCarModel(event.target.value);
    // }

    // return (
    //     <div>
    //         <h2>List of Car Objects</h2>
    //         <ul>
    //             {cars.map((car, index) => <li onClick={() => handleRemoveCar(index)} key={index}>{car.year} {car.make} {car.model}</li>)}
    //         </ul>

    //         <input type="number" value={carYear} onChange={handleYearChange}></input>
    //         <br></br>

    //         <input type="text" value={carMake} onChange={handleMakeChange}
    //                 placeholder="Enter car make"></input>
    //         <br></br>

    //         <input type="text" value={carModel} onChange={handleModelChange}
    //                 placeholder="Enter car model"></input>
    //         <br></br>

    //         <button onClick={handleAddCar}>Add Car</button>
    //     </div>
    // );

    // const [count, setCount] = useState(0);
    // const [color, setColor] = useState("green");
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log('Event listener');

        return () => {
            window.removeEventListener("resize", handleResize);
            console.log('Event listener removed');
        }
    }, []);

    // useEffect(() => {
    //     document.title = `Count: ${count} ${color}`;
    // },[count,color]);

    // function addCount(){
    //     setCount(c => c + 1);
    // }

    // function subtractCount(){
    //     setCount(c => c - 1);
    // }

    // function changeColor(){
    //     setColor(c => c === "green" ? "red" : "green");
    // }

    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return (
        <>
            <p>Window Width: {width} px</p>
            <p>Window Height: {height} px</p>
        </>
    )

}

export default MyComponent