import { Link } from "react-router-dom";
import "./Home.css";


function Home() {

  return (

    <main>


      <section className="hero">


        <h1>
          Elouann BATY
        </h1>


        <h2>
          Étudiant MIASHS — Statistiques & Analyse de données
        </h2>


        <p>
          Étudiant en statistiques et analyse de données,
          je développe des projets utilisant Python, SQL et
          la visualisation de données afin de transformer des
          données complexes en informations utiles à la décision.
        </p>



        <div className="buttons">


          <Link
            to="/projets"
            className="button"
          >
            Voir mes projets
          </Link>



          <Link
            to="/cv"
            className="button secondary"
          >
            Mon CV
          </Link>


        </div>


      </section>





      <section>


        <h2>
          Compétences
        </h2>



        <div className="skills">


          <span>
            Python
          </span>


          <span>
            SQL
          </span>


          <span>
            Pandas
          </span>


          <span>
            NumPy
          </span>


          <span>
            Statistiques
          </span>


          <span>
            Data Visualisation
          </span>


          <span>
            Git / GitHub
          </span>


        </div>


      </section>



    </main>

  );

}


export default Home;