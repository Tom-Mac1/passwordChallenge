/* Need to be able to set length, and choose certain characters to exclude (upper, lower, special, numerical)*/
import "./Hero.css";
import { useState } from "react";

function Pass(length, upperVar, lowerVar, numsVar, specVar) {
    var password = "";
    var upper = "";
    var lower = "";
    var nums = "";
    var special = "";
    if (upperVar === "true"){
        upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (lowerVar === "true"){
        lower = "abcdefghijklmnopqrstuvwxyz";
    }
    if (numsVar === "true"){
        nums = "1234567890";
    } 
    if (specVar === "true"){
        special = "?!£$%^&*()";
    }
    var characters = upper + lower + nums + special;
    /* create useffect for upperselect, lowerselect, nums and join them into one list based on whats true */
    /* create one for count with an up/down toggle */
    for (var i=0; i < length; i++){
        password += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return password
}
function Hero() {
    const [upper, setUpper] = useState("true");
    const [lower, setLower] = useState("true");
    const [numbers, setNumbers] = useState("true");
    const [special, setSpecial] = useState("true");
    const [length, setLength] = useState(0);
    return(
        <div className="HeroPage">
            <div className="Options">
                <button className="Btn" onClick={() => upper === "true" ? setUpper("false") : setUpper("true")}>UPPER: {upper}</button>
                <br/>
                <button className="Btn" onClick={() => lower === "true" ? setLower("false") : setLower("true")}>lower: {lower}</button>
                <br/>
                <button className="Btn" onClick={() => numbers === "true" ? setNumbers("false") : setNumbers("true")}>Numbers: {numbers}</button>
                <br/>
                <button className="Btn" onClick={() => special === "true" ? setSpecial("false") : setSpecial("true")}>Special: {special}</button>
                <br/>
                <p>Length: {length}</p>
                <button className="Btn" onClick={() => length === 0 ? setLength(length) : setLength(length-1)}>-</button> 
                <br/>
                <button className="Btn" onClick={() => setLength(length+1)}>+</button>
            </div>
            <div className="selector">
                <h1>Password: </h1>
                <p>{Pass(length, upper, lower, numbers, special)}</p>
            </div>
        </div>
    )
    
}

export default Hero;

// comment