import "./ProjectCreditScoring.css";

import couverture from "../assets/credit_scoring.png";

import courbesROC from "../assets/credit_scoring/courbes_roc_modeles.png";
import matriceLogistique from "../assets/credit_scoring/matrice_confusion_logistique.png";
import importanceVariables from "../assets/credit_scoring/importance_variables_random_forest.png";
import ecartStandardise from "../assets/credit_scoring/ecart_standardise_good_bad.png";

import rapportCreditScoring from "../assets/documents/report_credit_scoring.pdf";

function ProjectCreditScoring() {

  return (

    <main className="credit-page">


      {/* HEADER */}

      <section className="credit-header">

        <img
          src={couverture}
          alt="Credit Scoring"
          className="credit-cover"
        />

        <h1>
          Credit Scoring et classification du risque de crédit
        </h1>

        <p className="subtitle">
          Projet Data — Dataset HELOC
        </p>

        <p className="intro">
          Analyse des profils de risque de crédit à partir
          du jeu de données HELOC et comparaison de plusieurs
          modèles de classification afin d'identifier les
          emprunteurs présentant un risque de défaut.
        </p>

        <div className="buttons">

          <a
            href={rapportCreditScoring}
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
              10 459
            </h3>

            <p>
              Observations analysées
            </p>

          </div>


          <div className="stat-card">

            <h3>
              23
            </h3>

            <p>
              Variables explicatives
            </p>

          </div>


          <div className="stat-card">

            <h3>
              52,2 %
            </h3>

            <p>
              Profils classés Bad
            </p>

          </div>


          <div className="stat-card">

            <h3>
              3
            </h3>

            <p>
              Modèles comparés
            </p>

          </div>

        </section>

      </section>


      {/* CONTEXTE */}

      <section className="credit-card">

        <h2>
          Contexte du projet
        </h2>

        <p>
          Ce projet porte sur la classification du risque
          de crédit à partir du jeu de données HELOC.
        </p>

        <p>
          L'objectif est d'étudier les caractéristiques
          financières associées au risque de crédit et
          d'évaluer la capacité de différents modèles de
          machine learning à distinguer les profils
          présentant un risque élevé ou faible.
        </p>

      </section>


      {/* DONNEES */}

      <section className="credit-card">

        <h2>
          Données utilisées
        </h2>

        <ul>

          <li>
            Source : jeu de données HELOC
          </li>

          <li>
            Nombre d'observations : 10 459
          </li>

          <li>
            Nombre de variables explicatives : 23
          </li>

          <li>
            Variable cible : RiskPerformance
          </li>

          <li>
            Classes : Good et Bad
          </li>

        </ul>

      </section>


      {/* METHODOLOGIE */}

      <section className="credit-card">

        <h2>
          Méthodologie
        </h2>

        <div className="steps">

          <div>
            Exploration
          </div>

          <div>
            Nettoyage
          </div>

          <div>
            Prétraitement
          </div>

          <div>
            Modélisation
          </div>

          <div>
            Évaluation
          </div>

        </div>

      </section>


      {/* ARCHITECTURE */}

      <section className="credit-card">

        <h2>
          Architecture du projet
        </h2>

        <div className="architecture">

          <div>
            <strong>
              Données
            </strong>

            <p>
              Import et exploration du dataset HELOC
            </p>

          </div>

          <div>
            <strong>
              Prétraitement
            </strong>

            <p>
              Gestion des valeurs spéciales et préparation
              des variables
            </p>

          </div>

          <div>
            <strong>
              Modélisation
            </strong>

            <p>
              Régression logistique, Random Forest et
              Gradient Boosting
            </p>

          </div>

          <div>
            <strong>
              Évaluation
            </strong>

            <p>
              Matrices de confusion et courbes ROC
            </p>

          </div>

          <div>
            <strong>
              Interprétation
            </strong>

            <p>
              Analyse des variables importantes et des
              profils Good / Bad
            </p>

          </div>

        </div>

      </section>


      {/* RESULTATS */}

      <section className="credit-card">

        <h2>
          Principaux résultats
        </h2>

        <div className="results-grid">


          <article className="result">

            <img
              src={courbesROC}
              alt="Courbes ROC des modèles"
            />

            <h3>
              Comparaison des modèles
            </h3>

            <p>
              Comparaison des performances des différents
              modèles de classification à l'aide des courbes ROC.
            </p>

          </article>


          <article className="result">

            <img
              src={matriceLogistique}
              alt="Matrice de confusion de la régression logistique"
            />

            <h3>
              Évaluation de la classification
            </h3>

            <p>
              Analyse des prédictions du modèle à travers
              une matrice de confusion.
            </p>

          </article>


          <article className="result">

            <img
              src={importanceVariables}
              alt="Importance des variables"
            />

            <h3>
              Variables importantes
            </h3>

            <p>
              Identification des variables contribuant le
              plus à la classification du risque de crédit.
            </p>

          </article>


          <article className="result">

            <img
              src={ecartStandardise}
              alt="Écart standardisé entre les profils Good et Bad"
            />

            <h3>
              Profils Good et Bad
            </h3>

            <p>
              Comparaison des caractéristiques statistiques
              des deux catégories de risque.
            </p>

          </article>


        </div>

      </section>


      {/* PERFORMANCE DES MODELES */}

<section className="credit-card">

  <h2>
    Performance des modèles
  </h2>

  <p>
    Trois modèles de classification ont été comparés afin
    d'évaluer leur capacité à distinguer les profils Good
    et Bad.
  </p>

  <div className="model-highlight">

    <h3>
      Meilleur modèle : Random Forest
    </h3>

    <p>
      Le Random Forest obtient les meilleures performances
      globales, avec une Accuracy de 72,18 %, un F1-score
      de 74,34 % et une ROC-AUC de 79,24 %.
    </p>

  </div>


  <div className="model-table">

    <div className="model-row model-header">

      <span>Modèle</span>
      <span>Accuracy</span>
      <span>Precision</span>
      <span>Recall</span>
      <span>F1-score</span>
      <span>ROC-AUC</span>

    </div>


    <div className="model-row">

      <span>Régression logistique</span>
      <span>71,85 %</span>
      <span>71,70 %</span>
      <span>76,10 %</span>
      <span>73,83 %</span>
      <span>79,01 %</span>

    </div>


    <div className="model-row">

      <span>Random Forest</span>
      <span>72,18 %</span>
      <span>71,68 %</span>
      <span>77,20 %</span>
      <span>74,34 %</span>
      <span>79,24 %</span>

    </div>


    <div className="model-row">

      <span>Gradient Boosting</span>
      <span>71,94 %</span>
      <span>71,86 %</span>
      <span>76,01 %</span>
      <span>73,88 %</span>
      <span>78,71 %</span>

    </div>

  </div>


  <p className="model-conclusion">

    Les écarts entre les trois modèles restent relativement
    faibles. Le Random Forest présente néanmoins le meilleur
    compromis entre les différentes métriques étudiées.

  </p>

</section>


      {/* CONCLUSION */}

      <section className="credit-card conclusion">

        <h2>
          Conclusion
        </h2>

        <p>
          Ce projet a permis d'étudier la classification du
          risque de crédit à partir de données financières
          individuelles et de mettre en œuvre plusieurs
          approches de machine learning.
        </p>

        <p>
          La comparaison des modèles permet d'évaluer leurs
          performances respectives et d'identifier les
          variables les plus informatives pour la prédiction
          du risque.
        </p>

        <p>
          Ce travail mobilise des compétences en préparation
          des données, statistiques, machine learning,
          évaluation de modèles et interprétation des résultats.
        </p>

      </section>


      {/* RESSOURCES */}

      <section className="credit-card">

        <h2>
          Ressources du projet
        </h2>

        <div className="resource-buttons">

          <a
            href={rapportCreditScoring}
            target="_blank"
            rel="noopener noreferrer"
            className="resource-button"
          >
            📄 Rapport complet
          </a>


          <a
            href="https://github.com/elouannbaty/credit_scoring"
            target="_blank"
            rel="noopener noreferrer"
            className="resource-button"
          >
            💻 Code source GitHub
          </a>

        </div>

      </section>


      {/* TECHNOLOGIES */}

      <section className="credit-card">

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
            Scikit-learn
          </span>

          <span>
            Matplotlib
          </span>

          <span>
            Machine Learning
          </span>

          <span>
            Git
          </span>

        </div>

      </section>


    </main>

  );

}


export default ProjectCreditScoring;
