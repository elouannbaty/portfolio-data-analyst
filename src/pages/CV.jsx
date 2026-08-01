import "./CV.css";

import cvPDF from "../assets/documents/CV_Elouann_Baty.pdf";


function CV() {


  return (

    <main className="cv-page">


      <section className="cv-header">


        <h1>
          Elouann BATY
        </h1>


        <h2>
          Étudiant MIASHS — Statistiques & Analyse de données
        </h2>


        <p>
          Passionné par l'analyse de données,
          la programmation Python et la modélisation statistique.
        </p>


      </section>




      <section className="cv-card">


        <h2>
          Formation
        </h2>


        <h3>
          Licence MIASHS
        </h3>


        <p>
          Université de Nantes
        </p>


      </section>





      <section className="cv-card">


        <h2>
          Expérience professionnelle
        </h2>


        <h3>
          CHU de Nantes — Cuisine centrale
        </h3>


        <p>
          Expérience professionnelle de plus de 3 ans
          dans un environnement soumis aux normes HACCP.
        </p>


      </section>





      <section className="cv-card">


        <h2>
          Compétences
        </h2>


        <div className="cv-tags">


          <span>
            Python
          </span>


          <span>
            Pandas
          </span>


          <span>
            SQL
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






      <section className="cv-card">


        <h2>
          Projets
        </h2>


        <h3>
          Analyse du marché immobilier français (DVF)
        </h3>


        <p>
          Analyse de 5,9 millions de transactions immobilières
          françaises entre 2021 et 2025 à partir des données DVF.
          Nettoyage, analyse statistique, visualisation et modélisation
          avec Python et SQL.
        </p>


      </section>






      <a

        href={cvPDF}

        target="_blank"

        rel="noopener noreferrer"

        className="button"

      >

        Télécharger mon CV PDF

      </a>




    </main>

  );

}


export default CV;