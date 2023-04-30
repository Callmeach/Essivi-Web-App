import banner_home from "../assets/img/banner/home-left-1.png";

const Main = () => {
  return (
    <section className="home_banner_area" id="home">
      <div className="banner_inner">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="banner_content">
                <h2>
                  Service de <br />
                  distribution d'eau
                </h2>
                <p>
                  ESSIVI-Sarl est une entreprise de distribution d’eau potable
                  en gros. Nous sommes à votre service pour les livraisons de
                  sachets d’eau à des points de distributions intermédiaires.
                </p>
                <a className="banner_btn" href="/#">
                  Nous Rejoindre
                </a>
                <a className="banner_btn2" href="/#">
                  Téléchargement
                </a>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="home_left_img">
                <img className="img-fluid" src={banner_home} alt="banner" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
