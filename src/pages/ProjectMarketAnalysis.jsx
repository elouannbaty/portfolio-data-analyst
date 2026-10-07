import "./ProjectMarketAnalysis.css";


function ProjectMarketAnalysis() {

  return (

    <main className="market-page">


      {/* =========================
          HEADER
      ========================= */}

      <section className="market-header">

        <h1>
          Market Analysis IA
        </h1>

        <p className="subtitle">
          Market Intelligence appliquée au secteur de la restauration
          à Nantes Métropole
        </p>

        <p className="intro">
          Projet d'analyse de marché combinant données publiques,
          statistiques, analyse territoriale, traitement du langage
          naturel et intelligence artificielle locale afin de produire
          une synthèse structurée du marché de la restauration.
        </p>

        <div className="buttons">

          <a
            href="https://github.com/elouannbaty/market_analysis_ia"
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            💻 Voir le projet sur GitHub
          </a>

        </div>


        {/* STATISTIQUES */}

        <section className="stats">

          <div className="stat-card">

            <h3>
              7 819
            </h3>

            <p>
              Établissements étudiés
            </p>

          </div>


          <div className="stat-card">

            <h3>
              2 744
            </h3>

            <p>
              Établissements actifs
            </p>

          </div>


          <div className="stat-card">

            <h3>
              24
            </h3>

            <p>
              Communes étudiées
            </p>

          </div>


          <div className="stat-card">

            <h3>
              2022-2025
            </h3>

            <p>
              Période dynamique
            </p>

          </div>

        </section>

      </section>



      {/* =========================
          CONTEXTE
      ========================= */}

      <section className="market-card">

        <h2>
          Contexte du projet
        </h2>

        <p>
          Ce projet explore la possibilité de construire un système
          de Market Intelligence à partir de données publiques
          disponibles sur le territoire de Nantes Métropole.
        </p>

        <p>
          L'objectif est de caractériser la structure du marché,
          d'étudier sa dynamique, d'analyser les différences
          territoriales et d'extraire des informations à partir
          des noms d'enseignes.
        </p>

        <p>
          Une étape d'intelligence artificielle permet ensuite
          de transformer les indicateurs calculés en une synthèse
          structurée à l'aide d'un modèle de langage exécuté
          localement.
        </p>

      </section>



      {/* =========================
          DONNEES
      ========================= */}

      <section className="market-card">

        <h2>
          Données utilisées
        </h2>

        <ul>

          <li>
            <strong>SIRENE :</strong> établissements et entreprises
            du secteur de la restauration.
          </li>

          <li>
            <strong>INSEE :</strong> population, densité et niveau
            de vie.
          </li>

          <li>
            <strong>Données territoriales :</strong> indicateurs
            permettant de comparer les communes de Nantes Métropole.
          </li>

          <li>
            <strong>NLP :</strong> noms d'enseignes et informations
            textuelles disponibles dans les données SIRENE.
          </li>

        </ul>

      </section>



      {/* =========================
          METHODOLOGIE
      ========================= */}

      <section className="market-card">

        <h2>
          Méthodologie
        </h2>

        <div className="steps">

          <div>
            <strong>
              Collecte
            </strong>

            <p>
              Acquisition des données publiques.
            </p>
          </div>


          <div>
            <strong>
              Nettoyage
            </strong>

            <p>
              Filtrage, normalisation et contrôles qualité.
            </p>
          </div>


          <div>
            <strong>
              Analyse
            </strong>

            <p>
              Statistiques descriptives et indicateurs de marché.
            </p>
          </div>


          <div>
            <strong>
              Territoire
            </strong>

            <p>
              Analyse des différences entre communes.
            </p>
          </div>


          <div>
            <strong>
              NLP
            </strong>

            <p>
              Extraction d'informations à partir des enseignes.
            </p>
          </div>


          <div>
            <strong>
              IA
            </strong>

            <p>
              Synthèse par modèle de langage local.
            </p>
          </div>

        </div>

      </section>



      {/* =========================
          ARCHITECTURE
      ========================= */}

      <section className="market-card">

        <h2>
          Architecture du projet
        </h2>

        <div className="architecture">


          <div>

            <strong>
              Données publiques
            </strong>

            <p>
              SIRENE et INSEE
            </p>

          </div>


          <div>

            <strong>
              Préparation
            </strong>

            <p>
              Nettoyage et contrôle qualité
            </p>

          </div>


          <div>

            <strong>
              Analyse
            </strong>

            <p>
              Structure, dynamique et concentration
            </p>

          </div>


          <div>

            <strong>
              Analyse territoriale
            </strong>

            <p>
              Profils des communes
            </p>

          </div>


          <div>

            <strong>
              NLP
            </strong>

            <p>
              Analyse des enseignes
            </p>

          </div>


          <div>

            <strong>
              LLM local
            </strong>

            <p>
              Génération de la synthèse
            </p>

          </div>


        </div>

      </section>



      {/* =========================
          RESULTATS
      ========================= */}

      <section className="market-card">

        <h2>
          Principaux résultats
        </h2>


        <div className="results-grid">


          <article className="result">

            <h3>
              Structure du marché
            </h3>

            <p>
              Le périmètre étudié comprend 7 819 établissements
              historiques et actifs, répartis entre restauration,
              restauration rapide et cafés-bars.
            </p>

            <p>
              Parmi eux, 2 744 établissements sont actuellement
              actifs.
            </p>

          </article>



          <article className="result">

            <h3>
              Dynamique 2022-2025
            </h3>

            <p>
              L'analyse recense 1 212 créations et 1 079 fermetures,
              soit un solde net de +133 établissements sur la période.
            </p>

            <p>
              À Nantes, le solde est de +67 établissements.
            </p>

          </article>



          <article className="result">

            <h3>
              Concentration
            </h3>

            <p>
              Le marché présente une faible concentration globale,
              avec un HHI de 6,10 et un CR10 de 1,68 %.
            </p>

            <p>
              La concentration varie cependant selon les segments
              étudiés.
            </p>

          </article>



          <article className="result">

            <h3>
              Analyse territoriale
            </h3>

            <p>
              Nantes concentre 1 782 établissements actifs,
              soit environ 5,44 établissements actifs pour
              1 000 habitants.
            </p>

            <p>
              Son profil territorial est classé « Forte / Forte »
              selon les indicateurs retenus.
            </p>

          </article>


        </div>

      </section>



      {/* =========================
          NLP
      ========================= */}

      <section className="market-card">

        <h2>
          Analyse du langage naturel
        </h2>

        <p>
          Une analyse NLP a été réalisée sur les enseignes des
          établissements actifs afin d'identifier les principaux
          termes et associations de termes présents sur le marché.
        </p>


        <div className="nlp-grid">


          <div className="nlp-stat">

            <h3>
              1 264
            </h3>

            <p>
              Enseignes exploitables
            </p>

          </div>


          <div className="nlp-stat">

            <h3>
              cafe
            </h3>

            <p>
              Terme le plus fréquent
            </p>

          </div>


          <div className="nlp-stat">

            <h3>
              burger
            </h3>

            <p>
              Terme fortement représenté
            </p>

          </div>


          <div className="nlp-stat">

            <h3>
              burger king
            </h3>

            <p>
              Bigramme parmi les plus fréquents
            </p>

          </div>


        </div>


        <p>
          Les termes les plus fréquents comprennent notamment
          « cafe », « pizza », « bar », « restaurant », « burger »,
          « bistrot », « kebab » et « sushi ».
        </p>

      </section>



      {/* =========================
          IA / LLM
      ========================= */}

      <section className="market-card ai-section">

        <h2>
          Intelligence artificielle locale
        </h2>

        <p>
          La dernière étape du pipeline consiste à transmettre
          les résultats structurés de l'analyse à un modèle de
          langage exécuté localement.
        </p>


        <div className="architecture">


          <div>

            <strong>
              Contexte structuré
            </strong>

            <p>
              Les indicateurs sont regroupés dans un fichier JSON
              destiné au modèle.
            </p>

          </div>


          <div>

            <strong>
              Ollama
            </strong>

            <p>
              Infrastructure locale permettant d'exécuter
              le modèle de langage.
            </p>

          </div>


          <div>

            <strong>
              Qwen3 8B
            </strong>

            <p>
              Modèle utilisé pour produire la synthèse.
            </p>

          </div>


          <div>

            <strong>
              Contrôle automatique
            </strong>

            <p>
              Vérification de la structure et détection
              de formulations interdites.
            </p>

          </div>


        </div>


        <p>
          Le système impose notamment au modèle de ne pas inventer
          d'informations, de ne pas transformer une corrélation
          en causalité et de ne pas produire de conclusions
          non justifiées par les données.
        </p>

      </section>



      {/* =========================
          LIMITES
      ========================= */}

      <section className="market-card">

        <h2>
          Limites du projet
        </h2>

        <ul>

          <li>
            Les données publiques ne permettent pas d'observer
            l'intégralité des caractéristiques économiques des
            établissements.
          </li>

          <li>
            L'analyse décrit le marché observé mais ne constitue
            pas un modèle prédictif.
          </li>

          <li>
            Les résultats NLP dépendent de la qualité des noms
            d'enseignes disponibles dans SIRENE.
          </li>

          <li>
            La synthèse produite par le LLM reste contrainte
            par les indicateurs fournis en entrée.
          </li>

        </ul>

      </section>



      {/* =========================
          CONCLUSION
      ========================= */}

      <section className="market-card conclusion">

        <h2>
          Conclusion
        </h2>

        <p>
          Ce projet constitue une première preuve de concept
          d'une chaîne de Market Intelligence combinant analyse
          statistique, données territoriales, NLP et intelligence
          artificielle générative.
        </p>

        <p>
          L'objectif n'est pas de remplacer l'analyse humaine,
          mais de construire une chaîne reproductible permettant
          de transformer des données publiques hétérogènes en
          informations structurées et interprétables.
        </p>

        <p>
          Cette V0.1 pose ainsi les bases d'une architecture
          pouvant être approfondie dans de futures versions.
        </p>

      </section>



      {/* =========================
          RESSOURCES
      ========================= */}

      <section className="market-card">

        <h2>
          Ressources du projet
        </h2>

        <div className="resource-buttons">

          <a
            href="https://github.com/elouannbaty/market_analysis_ia"
            target="_blank"
            rel="noopener noreferrer"
            className="resource-button"
          >
            💻 Code source GitHub
          </a>

        </div>

      </section>



      {/* =========================
          TECHNOLOGIES
      ========================= */}

      <section className="market-card">

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
            SIRENE
          </span>

          <span>
            INSEE
          </span>

          <span>
            NLP
          </span>

          <span>
            Ollama
          </span>

          <span>
            Qwen3 8B
          </span>

          <span>
            Git
          </span>

        </div>

      </section>


    </main>

  );

}


export default ProjectMarketAnalysis;
