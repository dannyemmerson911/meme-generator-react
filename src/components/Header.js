import trollface from "../images/trollface.png"

export default function Header() {
    return (
        <div className="header"> 
           <img className="trollface" src={trollface} alt="troll face"/>
            <h3 className="title">meme generator</h3>
            <h3 className="courseProject">Emmerson Solutions</h3>
        </div>
    )
}
