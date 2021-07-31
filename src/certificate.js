import {Animated} from "react-animated-css";

export default function Certificate() {
  return (
    <>
      <section className="certificate-section">
        <div className="container-fluid">
        <Animated animationInDelay={1000} animationInDuration={1000} animationIn="fadeInDown" isVisible={true}>
          <div className="row">
            <div className="col-lg-12 mx-2 my-3">
              <h2>Certificates</h2>
            </div>
          </div>
          </Animated>
          <Animated animationInDelay={2000} animationInDuration={2000} animationIn="zoomIn" isVisible={true}>
          <div className="row">
         
            <div className="col-lg-6 my-5 ">
              <img
                className="certificate-img"
                src={"./JSCertificate.png"}
                alt="JSImg"
              />
            </div>
           
            
            <div className="col-lg-6 my-5 ">
              <img
                className="certificate-img"
                src={"./IPTCertificate.png"}
                alt="JSImg"
              />
            </div>
            
          </div>
          </Animated>
        </div>
      </section>
    </>
  );
}
