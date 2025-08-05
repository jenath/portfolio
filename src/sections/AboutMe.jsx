import './section_style/AboutMe.css';
import profile_image from "../assets/Jenath.jpg";
import Calender from "../assets/Calender.svg"
import Carousel from '../components/Carousel';

const images = [Calender, profile_image]

const AboutMe = () => {

    return (
        <>
            <Carousel data={images} />


            {/* <section class="profile">
                <img src={profile_image} width="80%"  alt="" />
            </section>
             <section class="description">
                <p>
                    I am a passionate engineer, with a love for sport, board games, music and food.
                    I have 3 years of experience working as a developer and have worked in small teams as well as large organsiations.
                    My current skills include HTML, CSS, JavaScript, TypeScript, Jest and Python. I am looking to develop my skills as an engineer and
                    contribute to more challenging projects. This web application is to share some more details about me and projects I have worked on along side my CV.
                    I currently represent the Middlesex County for badminton and run badminton club sessions in my local area.                   
                </p>
            </section> */}
            <section class="description">
                <p>
                    I am a passionate engineer, with a love for sport, board games, music and food.
                    I have 3 years of experience working as a developer and have worked in small teams as well as large organsiations.
                    My current skills include HTML, CSS, JavaScript, TypeScript, Jest and Python. I am looking to develop my skills as an engineer and
                    contribute to more challenging projects. This web application is to share some more details about me and projects I have worked on along side my CV.
                    I currently represent the Middlesex County for badminton and run badminton club sessions in my local area.                   
                </p>
            </section>
        </>
    )   
}

export default AboutMe