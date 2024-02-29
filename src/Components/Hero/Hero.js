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
    const [generatedPassword, setGeneratedPassword] = useState("");
    const [isGenerated, setIsGenerated] = useState(false);

    const generatePassword = () => {
        const password = Pass(length, upper, lower, numbers, special);
        setGeneratedPassword(password);
        setIsGenerated(true);

        setTimeout(() => {
            setGeneratedPassword("");
            setIsGenerated(false);
        }, 10000);
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(generatedPassword)
            .then(() => {
                console.log('Password copied to clipboard');
                alert('Password copied to clipboard');})
    };

    return(
        <div className="HeroPage">
            <div className="Options">
                <button className="Btn" onClick={() => setUpper(prevState => prevState === "true" ? "false" : "true")}>UPPER: {upper}</button>
                <br/>
                <button className="Btn" onClick={() => setLower(prevState => prevState === "true" ? "false" : "true")}>lower: {lower}</button>
                <br/>
                <button className="Btn" onClick={() => setNumbers(prevState => prevState === "true" ? "false" : "true")}>Numbers: {numbers}</button>
                <br/>
                <button className="Btn" onClick={() => setSpecial(prevState => prevState === "true" ? "false" : "true")}>Special: {special}</button>
                <br/>
                <p>Length: {length}</p>
                <button className="Btn" onClick={() => setLength(prevState => prevState === 0 ? prevState : prevState - 1)}>-</button> 
                <button className="Btn" onClick={() => setLength(prevState => prevState + 1)}>+</button>
                <br />
                <button className="Btn" onClick={generatePassword}>Generate Password</button>
                <button className="Btn" onClick={copyToClipboard} disabled={!isGenerated}>Copy to Clipboard</button>
            </div>
            <div className="selector">
                <h1>Password: </h1>
                <p>{generatedPassword}</p>
            </div>
        </div>
    )
}

export default Hero;

// comment