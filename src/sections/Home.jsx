import "./section_style/Home.css";
import MemoryGame from "../components/MemoryGame.jsx"
import { useState } from "react";

const Home = () => {

    const [page, setPage] = useState("home-section")
    

    const handleClick = () => {
        (page === "home-section") ?
            setPage("game-board") :
            setPage("home-section")
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
                            <button onClick={ handleClick }>CLICK ME</button>
                        </section>
                    </section>

                :
                    <section>
                        <MemoryGame />
                        <button onClick={ handleClick }>CLICK ME</button>
                    </section>
            }
        </>
    )
}

export default Home