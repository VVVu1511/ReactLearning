import React, {useState} from 'react'

function Car(){
    const [car, setCar] = useState({year: 2024, make: "Ford", model: "Mustang"});

    function hanldeYearChange(event){
        setCar(car => ({year: event.target.value, make: car["make"],model: car["model"]}) );
    }

    function hanldeMakeChange(event){
        setCar(car => ({year: car["year"], make: event.target.value,model: car["model"]}) );
    }

    function hanldeModelChange(event){
        setCar(car => ({year: car["year"], make: car["make"],model: event.target.value}) );
    }

    return (
        <div>
            <p>Your favorite car is: {car.year} {car.make} {car.model}</p>

            <input type="number" value={car.year} onChange={hanldeYearChange}></input>
            <br></br>
            <input type="text" value={car.make} onChange={hanldeMakeChange}></input>
            <br></br>
            <input type="text" value={car.model} onChange={hanldeModelChange}></input>
            <br></br>
        </div>
    );
}

export default Car