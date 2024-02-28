/* Need to be able to set length, and choose certain characters to exclude (upper, lower, special, numerical)*/

function Pass() {
    var password = "";
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var nums = "1234567890";
    var special = "?!£$%^&*()";
    var characters = upper + lower + nums + special;
    /* create useffect for upperselect, lowerselect, nums and join them into one list based on whats true */
    /* create one for count with an up/down toggle */
    for (var i=0; i < 20; i++){
        password += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return password
}
function Hero() {
    
    return(
        <div className="HeroPage">
            <div className="selector">
                <button></button>
                <p>{Pass()}</p>
            </div>
        </div>
    )
    
}

export default Hero;