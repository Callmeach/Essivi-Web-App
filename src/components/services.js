import banner_home from "../assets/img/banner/home-left-1.png"
import testimony from "../assets/img/testimonials/testi-1.png"
import testimony_2 from "../assets/img/testimonials/testi-2.png"
import React from "react"

const Services = () => {
    return (
        <React.Fragment>
            <section className="work_area p_120" id="services">
                <div className="container">
                    <div className="main_title">
                        <h2>Nos différents services</h2>
                        <p>ESSIVI-Sarl se met à votre disposition pour toutes vos commandes de sachets d'eaux.
                            Découvrez tous nos services dans la section ci dessous.
                        </p>
                    </div>
                    <div className="work_inner row">
                        <div className="col-lg-4">
                            <div className="work_item">
                                <i className="lnr lnr-screen"></i>
                                <a href="/#">
                                    <h4>Distribution d'eau</h4>
                                </a>
                                <p>Passez par un de nos agents commerciaux ou contactez ESSIVI-Sarl directement si vous
                                    souhaitez vous faire livrer. </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="work_item">
                                <i className="lnr lnr-code"></i>
                                <a href="/#">
                                    <h4>Production d'eau</h4>
                                </a>
                                <p>Nous avons également notre marque d'eau déposée Essivi. Procurez vous
                                    de l'eau pure Essivi, en sachets comme en bouteilles.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="work_item">
                                <i className="lnr lnr-clock"></i>
                                <a href="/#">
                                    <h4>Traitement d'eau</h4>
                                </a>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="screen_area text-center p_120">
                <div className="container">
                    <div className="main_title">
                        <h2>Découvrez l'application mobile Essivi</h2>
                        <p>Souhaitez-vous rejoindre notre équipe de livreurs? Contactez nous afin de vous
                            faire inscrire. Téléchargez ensuite l'application Essivi puis connectez vous et commencez à
                            enregistrer vos premiers clients!
                        </p>
                    </div>
                    <img className="img-fluid" src={banner_home} alt="banner" />
                </div>
            </section>


            <section className="testimonials_area p_120">
                <div className="container">
                    <div className="main_title">
                        <h2>Retours de nos clients</h2>
                        <p>Ces avis ont été laissés par nos partenaires, clients comme agents commerciaux.
                            Alors, qu'attendez-vous pour nous rejoindre?
                        </p>
                    </div>
                    <div className="testi_slider owl-carousel">
                        <div className="item">
                            <div className="testi_item">
                                <div className="media">
                                    <div className="d-flex">
                                        <img src={testimony} alt="testimony" />
                                    </div>
                                    <div className="media-body">
                                        <p>Je suis agent commerciale chez Essivi et je peux vous assurer qu'ils font
                                            du bon boulot!
                                        </p>
                                        <h4>Elisabeth Mark</h4>
                                        <div className="rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star-half-o"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="testi_item">
                                <div className="media">
                                    <div className="d-flex">
                                        <img src={testimony_2} alt="testimony" />
                                    </div>
                                    <div className="media-body">
                                        <p>Etant un client auprès de ESSIVI-Sarl, je peux témoigner de la qualité et la
                                            compétence de leurs livreurs. Ponctuels et très respectueux.
                                        </p>
                                        <h4>Ekoue Denis</h4>
                                        <div className="rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star-half-o"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="testi_item">
                                <div className="media">
                                    <div className="d-flex">
                                        <img src={testimony} alt="testimony" />
                                    </div>
                                    <div className="media-body">
                                        <p>L'une des meilleures si ce n'est la meilleure entreprise de dépôt d'eau dans
                                            la sous région. J'ai testé leur application et elle est impéccable! 5 étoiles!
                                        </p>
                                        <h4>Fabrice Senou</h4>
                                        <div className="rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="testi_item">
                                <div className="media">
                                    <div className="d-flex">
                                        <img src={testimony_2} alt="" />
                                    </div>
                                    <div className="media-body">
                                        <p>Mon expérience avec ESSIVI-Sarl m'a fait découvert leur service de traitement d'eaux
                                            et je peux témoigner qu'ils font un excellent travail. Recommande à 100%!
                                        </p>
                                        <h4>Afo Julien</h4>
                                        <div className="rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="testi_item">
                                <div className="media">
                                    <div className="d-flex">
                                        <img src={testimony} alt="" />
                                    </div>
                                    <div className="media-body">
                                        <p>Si vous voulez vous faire livrer de grosses quantités d'eau et garder un oeil sur toutes les
                                            activités je vous recommande Essivi et leur application qui est très intuitive.
                                        </p>
                                        <h4>Germaine Diallo</h4>
                                        <div className="rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="testi_item">
                                <div className="media">
                                    <div className="d-flex">
                                        <img src={testimony_2} alt="" />
                                    </div>
                                    <div className="media-body">
                                        <p>Tricycles disponibles pour les liveurs. Application de suivi, tout y est pour
                                            vous rendre productif et vous épanouir.
                                        </p>
                                        <h4>Bella Moore</h4>
                                        <div className="rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star-half-o"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Services