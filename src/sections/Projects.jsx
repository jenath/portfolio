import Project_Tile from '../components/Project_Tile.jsx'
import './section_style/Projects.css'
import razor from "../assets/Razor.svg"
import dictionary from "../assets/Dictionary.svg"
import calender from "../assets/Calender.svg"


const Projects = () => {

    return (
        <>
            <h1 class='Title_1'>Projects</h1>
            <section class="projects_list">
                <Project_Tile
                    image={razor}
                    url='https://gmail1308576.autodesk360.com/g/shares/SH919a0QTf3c32634dcf7e4fa426ce584bce'
                    description='Razor Blade Project'
                />
                <Project_Tile
                    image={dictionary}
                    url='https://jenath.github.io/Dictionary/'
                    description='Dictionary Application'
                />
                <Project_Tile
                    image={calender}
                    url='https://jenath.github.io/Calander/'
                    description='Calender Application'
                />
            </section>
        </>
    )
}

export default Projects