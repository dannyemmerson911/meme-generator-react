import React, {useState, useEffect} from "react"

export default function Meme() {
    const [allMemes, setAllMemes] = useState([]) // Passing data from js (memes) file into another state object (allMemeImages)

    const [meme, setMeme] = useState({ // Declaring the state object using useState...also naming and passing the 
        topText: "",                                        // setMeme function 
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    useEffect(() => { // Refer to my notes file on useEffect...Must know this.
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json()) //Sets your response to json
            .then(data => setAllMemes(data.data.memes)) //Sets response into state
    }, [])
    
   function getMemeImage() {
        const random = Math.floor(Math.random() * allMemes.length) // Return random number in an array
        const url = allMemes[random].url // Pull the random img url off meme object
        setMeme(prevMeme => ({ // Whenever you're changing state on an object...the call back function needs to be wrapped
            ...prevMeme,                    // in parenthesis to use an implicit return on two separate lines
            randomImage: url  // Set random img url from above as new state 
        }))
    }
    
    function handleChange(event) {
        const {name, value} = event.target // Event.target.name and event.target.value stored
        event.preventDefault() 
        setMeme(prevMeme => ({
            ...prevMeme, // Spread previous state 
            [name]: value  // Input boxes set new state onChange
        }))
    }

    return (
        <main>
            <div className="form">
                <div className="formInput">
                    <input 
                        type="text"
                        placeholder="top"
                        name="topText" // Name must match with what's stored in state up top
                        onChange={handleChange}
                        value={meme.topText}
                    />
                    <input 
                        type="text"
                        placeholder="bottom"
                        name="bottomText"
                        onChange={handleChange}
                        value={meme.bottomText}
                    />
                </div>
                <button 
                    className="formButton"
                    onClick={getMemeImage}>    
                    new meme image
                </button>
            </div>
            <div className="meme">
                <img className="memeImg" src={meme.randomImage} alt="meme goes here"/>
                <h2 className="memeText top">{meme.topText}</h2>
                <h2 className="memeText bottom">{meme.bottomText}</h2>
            </div>  
        </main>
    )
}


