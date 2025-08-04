import '../component_style/Project_Tile.css'

const Project_Tile = ({ image, url, description }) => {

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

export default Project_Tile