import Project_Tile from '../components/Project_Tile.jsx'
import './section_style/Projects.css'


const Projects = () => {

    return (
        <>
            <h1 class='Title_1'>Projects</h1>
            <section class="projects_list">
                <Project_Tile
                    image='src\assets\Razor.svg'
                    url='https://gmail1308576.autodesk360.com/g/shares/SH919a0QTf3c32634dcf7e4fa426ce584bce'
                    description='Razor Blade Project'
                />
                <Project_Tile
                    image='src\assets\Dictionary.svg'
                    url='https://jenath.github.io/Dictionary/'
                    description='Dictionary Application'
                />
                <Project_Tile
                    image='src\assets\Calender.svg'
                    url='https://jenath.github.io/Calander/'
                    description='Calender Application'
                />
            </section>
        </>
    )
}

export default Projects