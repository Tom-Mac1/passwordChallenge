/* Need to be able to set length, and choose certain characters to exclude (upper, lower, special, numerical)*/

import { useState } from "react";

function Pass(length) {
    var password = "";
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var nums = "1234567890";
    var special = "?!£$%^&*()";
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
                <button onClick={() => upper === "true" ? setUpper("false") : setUpper("true")}>UPPER: {upper}</button>
                <br/>
                <button onClick={() => lower === "true" ? setLower("false") : setLower("true")}>lower: {lower}</button>
                <br/>
                <button onClick={() => numbers === "true" ? setNumbers("false") : setNumbers("true")}>Numbers: {numbers}</button>
                <br/>
                <button onClick={() => special === "true" ? setSpecial("false") : setSpecial("true")}>Special: {special}</button>
                <br/>
                <p>Length: {length}</p>
                <button onClick={() => length === 0 ? setLength(length) : setLength(length-1)}>-</button> 
                <button onClick={() => setLength(length+1)}>+</button>
            </div>
            <div className="selector">
                <button>Generate Password</button>
                <p>{Pass(length)}</p>
            </div>
        </div>
    )
    
}

export default Hero;