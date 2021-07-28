import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function Contact() {
  return (
    <>
      <section className="contact-section">
        <div className="container-fluid">
          <div className="row">
            <h1 id="heading">Let's Get In Touch</h1>

            <p>
              As of now, I'm looking for a job as an Full-Stack Developer, and I
              am always active if you want to communicate with me. Hit me up if
              you have some question, want a collaboration or just want to say
              Hiii. I'll try to get back to you as soon as I can.
            </p>

            <h3>You Can Contact Me Here...</h3>
            <div id="icons">
              <a
                style={{ textDecoration: "none" }}
                href="https://api.whatsapp.com/send?phone=917218867376"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div>
                  <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                  <span> Whatsapp </span>
                </div>
              </a>
              <a
                style={{ textDecoration: "none" }}
                href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=amarparihar1359@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div>
                  <FontAwesomeIcon icon={faEnvelope} size="2x" />
                  <span> Gmail </span>
                </div>
              </a>
              <a
                style={{ textDecoration: "none" }}
                href="https://twitter.com/intent/tweet?url=https://twitter.com/AmarPariharRaj1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div>
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                  <span> twitter </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
