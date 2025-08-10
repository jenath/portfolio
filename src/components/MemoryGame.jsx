import { useState } from "react";
import "./component_style/MemoryGame.css";

const MemoryGame = () => {

    const [info, setInfo] = useState('');

    const number_of_buttons = 15;
    const user_selected_buttons = [];
    const selected_buttons = [];
    const [result, setResult] = useState('');

    const handleInfo = () => {
        if (info === '') {
            setInfo("A game to test your memory, probably a bit more fun, click the numbers that get highlighted!")
        } else {
            setInfo('');
        }
    }
    
    const randomSelection = () => {
        
        const playButton = document.getElementById("play_button");
        playButton.disabled = true;
        
        selected_buttons.length = 0;
        user_selected_buttons.length = 0;

        const random_number = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
        
        for (let i = 0; i < random_number; i++) {
            const random_button = Math.floor(Math.random() * (number_of_buttons - 1 + 1)) + 1;
            const select_random_button = document.getElementById(random_button);
            selected_buttons.push(select_random_button);
        }
        
        const selected_buttons_no_duplicates = [...new Set(selected_buttons)];
        selected_buttons.length = 0;

        selected_buttons_no_duplicates.forEach((button_value) => {
            selected_buttons.push(button_value);
        });
        
        selected_buttons.forEach(button => {
            button.className = "selected";
            
            setTimeout(() => {
                button.className = "";
                playButton.disabled = false;
            }, 1000)
        });
    }
    
    const handleSelection = (event) => {
        user_selected_buttons.push(event.target.id);
        const mapped_selected_buttons = selected_buttons.map(e => e['id']);
        
        user_selected_buttons.sort((a, b) => {
            return a - b;
        });
        
        mapped_selected_buttons.sort((a, b) => {
            return a - b;
        });

        if (user_selected_buttons.length !== mapped_selected_buttons.length) {
            return;
        } else {
            const areEqual = user_selected_buttons.every((value, index) => value === mapped_selected_buttons[index]);
            if (areEqual) {
                setTimeout(() => {
                    setResult('');
                }, 1000)

                setResult('Congratulations!');
            } else {
                setTimeout(() => {
                    setResult('');
                }, 1000)

                setResult('Try again!'); 
            }
        }
    }


    
    const createGamebuttons = (number_of_buttons) => {
        const buttons_list = [];
        for (let i = 0; i < number_of_buttons; i++) {
            buttons_list.push(
                <button 
                    key={i + 1} 
                    id={i + 1}
                    onClick={handleSelection}
                >{i + 1}</button>
            )
        };

        return buttons_list;
    }
    
    return (
        <>
            <section className="memory-game">
                <section className="game-board">
                    { createGamebuttons(number_of_buttons) }
                    <button 
                        id="play_button" 
                        onClick={randomSelection}
                    >Play</button>
                </section>
                <h1>{result}</h1>
                <section className="info-button">
                    <div className="info-button-container">
                        <button
                            onClick={handleInfo}
                        >I</button>
                    </div>
                    <h1>{info}</h1>
                </section>
            </section>
        </>
    )
}

export default MemoryGame