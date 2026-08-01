import { Link } from "react-router-dom";
import dvfImage from "../assets/dvf.png";
import "./Projects.css";


function Projects() {

  const projects = [

    {
      title: "Analyse du marché immobilier français (DVF)",
      description:
        "Analyse de près de 6 millions de transactions immobilières françaises entre 2021 et 2025.",
      image: dvfImage,
      technologies: [
        "Python",
        "Pandas",
        "SQL",
        "Statistiques",
        "Data Visualisation"
      ],
      link: "/projet-dvf"
    }

  ];


  return (

    <main className="projects-page">


      <h1>
        Mes projets
      </h1>



      <div className="projects-grid">


        {projects.map((project, index) => (

          <article 
            className="project-card"
            key={index}
          >


            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />



            <div className="project-content">


              <h2>
                {project.title}
              </h2>


              <p>
                {project.description}
              </p>



              <div className="project-tags">


                {project.technologies.map((tech) => (

                  <span key={tech}>
                    {tech}
                  </span>

                ))}


              </div>



              <Link
                to={project.link}
                className="button"
              >
                Voir le projet
              </Link>



            </div>


          </article>


        ))}


      </div>


    </main>

  );

}


export default Projects;