import "./component_style/MemoryGame.css";

const MemoryGame = () => {

    const number_of_buttons = 15;
    const selected_buttons = [];

    const random_selection = () => {
        
        const playButton = document.getElementById("play_button");
        playButton.disabled = true;
        
        selected_buttons.length = 0;

        const random_number = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
        for (let i = 0; i < random_number; i++) {
            const random_button = Math.floor(Math.random() * (number_of_buttons - 1 + 1)) + 1;
            const select_random_button = document.getElementById(random_button);
            selected_buttons.push(select_random_button);
        }

        selected_buttons.forEach(button => {
            button.className = "selected";

            setTimeout(() => {
                button.className = "";
                playButton.disabled = false;
            }, 1000)
        });

    }

    const createGamebuttons = (number_of_buttons) => {
        const buttons_list = [];
        for (let i = 0; i < number_of_buttons; i++) {
            buttons_list.push(
                <button 
                    key={i + 1} 
                    id={i + 1}
                >{i + 1}</button>
            )
        };

        return buttons_list;
    }
    
    return (
        <>
            <section className="memory-game">
                {/* <section className="rounds">
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                </section> */}
                <section className="game-board">
                    { createGamebuttons(number_of_buttons) }
                    <button id="play_button" onClick={random_selection}>Play</button>
                </section>
            </section>
        </>
    )
}

export default MemoryGame