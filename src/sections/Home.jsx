import "./section_style/Home.css"
import home_image from "src\assets\Plants.jpg"

const Home = () => {

    return (
        <>
            <section class="home">
                <img src={home_image} alt="" />
            </section>
        </>
    )
}

export default Home