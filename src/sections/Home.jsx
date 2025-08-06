import "./section_style/Home.css"
import home_image from "../assets/jpg/plants.jpg"

const Home = () => {

    return (
        <>
            <section class="home">
                <img src={home_image} width="50%" alt="" />
            </section>
        </>
    )
}

export default Home