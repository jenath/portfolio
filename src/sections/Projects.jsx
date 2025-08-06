import ProjectTile from '../components/ProjectTile.jsx'
import './section_style/Projects.css'
import razor from "../assets/svg/razor.svg"
import dictionary from "../assets//svg/dictionary.svg"
import calender from "../assets/svg/calender.svg"


const Projects = () => {

    return (
        <>
            <h1 class='Title_1'>Projects</h1>
            <section class="projects_list">
                <ProjectTile
                    image={razor}
                    url='https://gmail1308576.autodesk360.com/g/shares/SH919a0QTf3c32634dcf7e4fa426ce584bce'
                    description='Razor Blade Project'
                />
                <ProjectTile
                    image={dictionary}
                    url='https://jenath.github.io/Dictionary/'
                    description='Dictionary Application'
                />
                <ProjectTile
                    image={calender}
                    url='https://jenath.github.io/Calander/'
                    description='Calender Application'
                />
            </section>
        </>
    )
}

export default Projects