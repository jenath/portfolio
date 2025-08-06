import './component_style/ProjectTile.css'

const ProjectTile = ({ image, url, description }) => {

    return (
        <>
            <section id="tile">
                <a href={url}>
                    <img width="50%" height="50%" src={image} alt="" />
                </a>
                <p>{description}</p>   
            </section>
        </>
    )
}

export default ProjectTile