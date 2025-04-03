import React, {useState} from "react"


function MyComponent(){

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState();
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");

    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        setName("Vu");
    };

    const incrementAge = () => {
        setAge(age + 1);
    };

    const decrementAge = () => {
        setAge(age - 1);
    }

    const toggleEmployedStatus = () => {
        setIsEmployed(!isEmployed);
    };

    function handleNameChange(event){
        setName(event.target.value);
    }

    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }

    function handleCommentChange(event){
        setComment(event.target.value);
    }

    function handlePaymentChange(event){
        setPayment(event.target.value);
    }

    return (
        <div>
            <input value={name} onChange={handleNameChange}></input>

            <p>Name: {name}</p>

            <input value={quantity} onChange={handleQuantityChange} type="number" min={0}></input>

            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={handleCommentChange} placeholder="Enter delivery instructions"></textarea>
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="Giftcard">Giftcard</option>
            </select>

            <p>Payment: {payment}</p>
        </div>
    );
}

export default MyComponent