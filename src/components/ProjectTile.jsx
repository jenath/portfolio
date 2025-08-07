import './component_style/ProjectTile.css'

const ProjectTile = ({ image, url, description }) => {

    return (
        <>
            <section className='tile'>
                <a href={url} className='url-container'>
                    <section className='img-container'>
                        <img src={image} alt="" />
                    </section>
                    <p>{ description }</p>
                </a>
            </section>
        </>
    )
}

export default ProjectTile