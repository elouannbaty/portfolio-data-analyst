import "./Contact.css";


function Contact() {


  return (

    <main className="contact-page">


      <section className="contact-header">


        <h1>
          Contact
        </h1>


        <p>
          Vous souhaitez échanger sur un projet,
          une opportunité ou discuter d'analyse de données ?
        </p>


      </section>




      <section className="contact-card">


        <div className="contact-item">


          <h2>
            Email
          </h2>


          <a href="mailto:ton.email@example.com">
            elouann.baty@gmail.com
          </a>


        </div>




        <div className="contact-item">


          <h2>
            GitHub
          </h2>


          <a 
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mon GitHub
          </a>


        </div>




        <div className="contact-item">


          <h2>
            LinkedIn
          </h2>


          <a 
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mon LinkedIn
          </a>


        </div>



      </section>


    </main>

  );

}


export default Contact;