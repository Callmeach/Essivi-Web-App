
const Footer = () => {
  return (
    <footer className="footer_area p_120">
    <div className="container">
      <div className="row footer_inner">
        <div className="col-lg-5 col-sm-6">
          <aside className="f_widget ab_widget">
            <div className="f_title">
              <h3>A Propos</h3>
            </div>
            <p>ESSIVI-Sarl est une entreprise de distribution d’eau potable en
              gros qui distribue les sachets d’eau à des points de distribution
              intermédiaire.</p>
            <p>
              Copyright &copy;
              2023 Tous les droits sont réservés | ESSIVI-Sarl
            </p>
          </aside>
        </div>
        <div className="col-lg-5 col-sm-6">
          <aside className="f_widget news_widget">
            <div className="f_title">
              <h3>Newsletter</h3>
            </div>
            <p>Restés informés de nos nouvelles informations</p>
            <div id="mc_embed_signup">
              <form target="_blank"
                action=""
                className="subscribe_form relative">
                <div className="input-group d-flex flex-row">
                  <input name="EMAIL" placeholder="Entrez votre adresse mail"
                    required type="email" />
                  <button className="btn sub-btn"><span className="lnr lnr-arrow-right"></span></button>
                </div>
                <div className="mt-10 info"></div>
              </form>
            </div>
          </aside>
        </div>
        <div className="col-lg-2">
          <aside className="f_widget social_widget">
            <div className="f_title">
              <h3>Suivez nous</h3>
            </div>
            <p>Nos réseaux sociaux</p>
            <ul className="list">
              <li><a href="/#"><i className="fa fa-facebook"></i></a></li>
              <li><a href="/#"><i className="fa fa-twitter"></i></a></li>
              <li><a href="/#"><i className="fa fa-dribbble"></i></a></li>
              <li><a href="/#"><i className="fa fa-behance"></i></a></li>
            </ul>
          </aside>
        </div>
      </div>
    </div>

  </footer>
  )
}

export default Footer