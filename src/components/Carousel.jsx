import { useState } from "react"
import '../component_style/carousel.css'

const Carousel = ({ data }) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleLeftChange = () => {
        (currentIndex === 0) ? setCurrentIndex(data.length - 1) : setCurrentIndex(currentIndex - 1);
    }

    const handleRightChange = () => {
        (currentIndex === data.length - 1) ? setCurrentIndex(0) : setCurrentIndex(currentIndex + 1);
    }

    return (
        <>
            <section class="carousel-box">
                <section class="image-box">
                    <img src={data[currentIndex]} alt="" />
                </section>
                <br />
                <section>
                    <button onClick={handleLeftChange}>left</button>
                    <button onClick={handleRightChange}>right</button>
                </section>
            </section> 
        </>
    )
}

export default Carousel