import banner_home from "../assets/img/banner/home-left-1.png";

const About = () => {
  return (
    <section className="made_life_area made_white p_120" id="about">
      <div className="container">
        <div className="made_life_inner">
          <div className="row made_life_text">
            <div className="col-lg-6">
              <div className="chart_img">
                <img className="img-fluid" src={banner_home} alt="banner" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="left_side_text">
                <h3>
                  De l'eau potable <br />à votre disposition
                </h3>
                <h6>
                  Notre objectif est de vous livrer dans les meilleures
                  conditions.
                </h6>
                <p>
                  Nous disposons des tricycles que nous confiont à nos
                  commerciaux afin qu'ils s'occupent de façon efficace de la
                  distribution à tous vos points de livraisons.
                </p>
                <a className="main_btn" href="/#">
                  Rejoignez l'équipe
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
