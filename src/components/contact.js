import React from "react";

const Contact = () => {
  return (
    <React.Fragment>
      <section className="contact_area p_120" id="contact">
        <div className="container">
          <div className="main_title">
            <h2>Nous Contacter</h2>
          </div>
          <div className="row">
            <div className="col-lg-3">
              <div className="contact_info">
                <div className="info_item">
                  <i className="lnr lnr-home"></i>
                  <h6>Lomé, Togo</h6>
                  <p>Boulevard Saint Loisel</p>
                </div>
                <div className="info_item">
                  <i className="lnr lnr-phone-handset"></i>
                  <h6>
                    <a href="/#">00 (228) 22200705</a>
                  </h6>
                  <p>Lun à Sam 8h à 17h</p>
                </div>
                <div className="info_item">
                  <i className="lnr lnr-envelope"></i>
                  <h6>
                    <a href="#">
                      <span
                        className="__cf_email__"
                        data-cfemail="8efdfbfefee1fcfaceede1e2e1fce2e7eca0ede1e3"
                      >
                        essivi-sarl@eau.tg
                      </span>
                    </a>
                  </h6>
                  <p>Posez vos questions ici!</p>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <form
                className="row contact_form"
                action="https://preview.colorlib.com/theme/nexus/contact_process.php"
                method="post"
                id="contactForm"
                novalidate="novalidate"
              >
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="Entrez votre nom"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Entrez votre adresse mail"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      name="subject"
                      placeholder="Entrez un objet"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      name="message"
                      id="message"
                      rows="1"
                      placeholder="Taper votre message"
                    ></textarea>
                  </div>
                </div>
                <div className="col-md-12 text-right">
                  <button
                    type="submit"
                    value="submit"
                    className="btn submit_btn"
                  >
                    Envoyez le message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="impress_area p_120">
        <div className="container">
          <div className="impress_inner">
            <h2>Interessés par un de nos services?</h2>
            <p>
              ESSIVI-Sarl se met à votre disposition pour la distribution d'eau
              potable dans la sous région. Nous disposons d'agents commerciaux
              très affutés qui sauront faire le pont entre vous et nous. Devenez
              un client auprès de nous et bénéficiez d'une convivialité sans
              faille.
            </p>
            <a className="banner_btn2" href="/#">
              Rejoignez nous
            </a>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Contact;
