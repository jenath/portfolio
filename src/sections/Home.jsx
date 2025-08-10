import "./section_style/Home.css";
import MemoryGame from "../components/MemoryGame.jsx"
import { useState } from "react";

const Home = () => {

    const [page, setPage] = useState("home-section");
    const [buttonText, setButtonText] = useState("CLICK ME");
    

    const handleClick = () => {
        if (page === "home-section") {
            setPage("game-section");
            setButtonText("Return to home")
        } else {
            setPage("home-section");
            setButtonText("CLICK ME");
        }
    }

    return (
        <>
            { 
                (page === "home-section") ? 
                    <section className="home-section">
                        <section className="home-background">
                        </section>
                        <section className="home-description">
                            <h1>Hi, its Jenath</h1>
                            <p>
                                Just your average Jenath, check out my page if your interested in Jenath.
                                But if not, click the button below theres probably something more interesting. 
                                P.s. I would click the button aswell.
                            </p>
                            <button onClick={ handleClick }>{buttonText}</button>
                        </section>
                    </section>

                :
                    <section className="game-section">
                        <MemoryGame />
                        <div className="return-home-button">
                            <button onClick={ handleClick }>{buttonText}</button>
                        </div>
                    </section>
            }
        </>
    )
}

export default Home