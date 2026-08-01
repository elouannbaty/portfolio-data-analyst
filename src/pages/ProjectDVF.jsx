import "./ProjectDVF.css";

import couverture from "../assets/dvf.png";

import cartePrix from "../assets/dvf/carte_prix.png";
import evolutionPrix from "../assets/dvf/evolution_prix.png";
import densitePrix from "../assets/dvf/densite_prix.png";
import transactionsDep from "../assets/dvf/transaction_dep.png";

import rapportDVF from "../assets/documents/Rapport_DVF.pdf";

function ProjectDVF() {

  return (

    <main className="dvf-page">


      {/* HEADER */}

      <section className="dvf-header">

        <img 
          src={couverture}
          alt="Analyse DVF"
          className="dvf-cover"
        />

        <h1>
          Analyse du marché immobilier français
        </h1>

        <p className="subtitle">
          Projet Data — Données DVF 2021-2025
        </p>


        <p className="intro">
          Analyse de près de 6 millions de transactions
          immobilières françaises afin d'étudier l'évolution
          des prix, les disparités territoriales et les
          caractéristiques des biens vendus.
        </p>

        <div className="buttons">

  <a 
    href={rapportDVF}
    target="_blank"
    rel="noopener noreferrer"
    className="button"
  >
    📄 Consulter le rapport complet
  </a>

</div>

<section className="stats">


  <div className="stat-card">

    <h3>
      5,9 millions
    </h3>

    <p>
      Transactions analysées
    </p>

  </div>



  <div className="stat-card">

    <h3>
      97
    </h3>

    <p>
      Départements étudiés
    </p>

  </div>




  <div className="stat-card">

    <h3>
      3 697 €
    </h3>

    <p>
      Prix moyen au m²
    </p>

  </div>




  <div className="stat-card">

    <h3>
      2021-2025
    </h3>

    <p>
      Période étudiée
    </p>

  </div>


</section>

      </section>




      {/* CONTEXTE */}

      <section className="dvf-card">

        <h2>
          Contexte du projet
        </h2>

        <p>
          Ce projet consiste à explorer le marché immobilier
          français à partir des données publiques DVF
          disponibles sur data.gouv.fr.
        </p>

        <p>
          L'objectif est d'analyser les tendances du marché
          immobilier entre 2021 et 2025 et d'identifier
          les différences entre territoires.
        </p>

      </section>





      {/* DONNEES */}

      <section className="dvf-card">

        <h2>
          Données utilisées
        </h2>


        <ul>

          <li>
            Source : base publique DVF (data.gouv.fr)
          </li>

          <li>
            Période étudiée : 2021 - 2025
          </li>

          <li>
            Volume analysé : 5 897 956 transactions
          </li>

          <li>
            Variables étudiées : prix, surface, localisation,
            type de bien
          </li>

        </ul>


      </section>






      {/* METHODOLOGIE */}

      <section className="dvf-card">

        <h2>
          Méthodologie
        </h2>


        <div className="steps">

          <div>
            Collecte
          </div>

          <div>
            Nettoyage
          </div>

          <div>
            Analyse
          </div>

          <div>
            Visualisation
          </div>

          <div>
            Modélisation
          </div>

        </div>


      </section>






      {/* RESULTATS */}

      <section className="dvf-card">

        <section className="dvf-card">


  <h2>
    Architecture du projet
  </h2>



  <div className="architecture">


    <div>
      <strong>
        Données brutes
      </strong>

      <p>
        Import des données DVF publiques
      </p>

    </div>



    <div>
      <strong>
        Nettoyage
      </strong>

      <p>
        Traitement Python avec Pandas
      </p>

    </div>



    <div>
      <strong>
        Analyse
      </strong>

      <p>
        Statistiques descriptives et indicateurs
      </p>

    </div>



    <div>
      <strong>
        Visualisation
      </strong>

      <p>
        Graphiques et cartes géographiques
      </p>

    </div>



    <div>
      <strong>
        Modélisation
      </strong>

      <p>
        Tests de modèles prédictifs
      </p>

    </div>


  </div>


</section>


        <h2>
          Principaux résultats
        </h2>


        <div className="results-grid">



          <article className="result">

            <img 
              src={evolutionPrix}
              alt="Evolution des prix"
            />

            <h3>
              Evolution des prix immobiliers
            </h3>

            <p>
              Analyse temporelle de l'évolution du prix
              médian au m² entre 2021 et 2025.
            </p>

          </article>





          <article className="result">

            <img 
              src={cartePrix}
              alt="Carte des prix"
            />

            <h3>
              Disparités géographiques
            </h3>

            <p>
              Visualisation des différences de prix
              immobilier selon les départements.
            </p>

          </article>






          <article className="result">

            <img 
              src={densitePrix}
              alt="Relation densité prix"
            />

            <h3>
              Densité et niveau des prix
            </h3>

            <p>
              Mise en évidence de la relation entre
              densité territoriale et prix immobilier.
            </p>

          </article>







          <article className="result">

            <img 
              src={transactionsDep}
              alt="Transactions par département"
            />

            <h3>
              Répartition des transactions
            </h3>

            <p>
              Analyse du volume de transactions
              immobilières par département.
            </p>

          </article>



        </div>


      </section>








      {/* TECHNOLOGIES */}

     <section className="dvf-card conclusion">


  <h2>
    Conclusion
  </h2>


  <p>
    Ce projet a permis d'analyser le marché immobilier français
    à partir de près de 6 millions de transactions issues des
    données DVF entre 2021 et 2025.
  </p>


  <p>
    L'étude met en évidence les évolutions temporelles des prix,
    les fortes disparités territoriales ainsi que l'influence
    de certaines caractéristiques des biens sur leur valeur.
  </p>


  <p>
    Ce travail m'a permis de mobiliser différentes compétences
    en analyse de données : préparation des données, statistiques
    descriptives, visualisation, traitement Python et modélisation.
  </p>


</section>

<section className="dvf-card">


  <h2>
    Ressources du projet
  </h2>


  <div className="resource-buttons">


    <a
      href={rapportDVF}
      target="_blank"
      rel="noopener noreferrer"
      className="resource-button"
    >
      📄 Rapport complet
    </a>


    <a
      href="https://github.com/elouannbaty/analyse_dvf"
      target="_blank"
      rel="noopener noreferrer"
      className="resource-button"
    >
      💻 Code source GitHub
    </a>


  </div>


</section>

<section className="dvf-card">


  <h2>
    Technologies utilisées
  </h2>


  <div className="tech">


    <span>
      Python
    </span>

    <span>
      Pandas
    </span>

    <span>
      NumPy
    </span>

    <span>
      Matplotlib
    </span>

    <span>
      SQL
    </span>

    <span>
      Git
    </span>


  </div>


</section>



    </main>

  )

}


export default ProjectDVF;