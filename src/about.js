export default function AboutMe() {
  return (
    <>
      <section className="about-section">
        <div className="container-fluid">
          <div className="row">
            <div id="aboutme">About Me</div>
          </div>
          <div className="row">
            <div id="profile-pic">
              <img src={"/amar.jpg"} alt="img" />
            </div>
          </div>
          <section className="biography">
            <h2>Hey, I'm Amar! </h2>
            <p>
              I have completed my graduation in 'Information Technology' from
              Sant Gadge Baba Amravati University,Maharashtra in the year of
              2020. I have learned Full-Stack from zen class ,{" "}
              <a
                href="https://www.guvi.in/"
                target="_blank"
                rel="noopener noreferrer"
                style={{textDecoration:"none"}}
              >
                G U V I
              </a>
              .
            </p>
            <p>
              I'm a Full-Stack Web Developer. I have a passion for coding and
              get most enjoyment from solving problems with writing
              elegant/maintainable code and sharing knowledge. I love learning
              so I'm always keeping up to date by watching Technical youtube
              channeles and reading technical related posts on twitter.
            </p>
          </section>
          <hr />
          <section className="skills">
            <div id="skills">Skills</div>
            <div className="icons">
              <img src={"/html.png"} className="html" alt="img" />

              <img src={"/css.png"} className="css" alt="img" />

              <img src={"/js.png"} className="js" alt="img" />

              <img src={"/bootstrap.png"} className="bootstrap" alt="img" />

              <img src={"/react.png"} className="react" alt="img" />

              <img src={"/nodejs.png"} className="nodejs" alt="img" />

              <img src={"/expressjs.png"} className="expressjs" alt="img" />

              <img src={"/mongo.png"} className="mongo" alt="img" />

              <img src={"/mysql.png"} className="mysql" alt="img" />

              <img src={"/aws.png"} className="aws" alt="img" />

            </div>
          </section>
          <hr/>
          <section className="tools">
            <div id="tools">Tools</div>
            <div className="icons">
              <img src={"/vscode.png"} className="vscode" alt="img" />

              <img src={"/postman.png"} className="postman" alt="img" />

              <img src={"/mongodb-atlas.jpg"} className="mongodb-atlas" alt="img" />

              <img src={"/mongo-compass.png"} className="mongo-compass" alt="img" />

              <img src={"/github.png"} className="github" alt="img" />
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
