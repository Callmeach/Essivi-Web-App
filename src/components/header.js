import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header className="header_area">
            <div className="main_menu">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container box_1620">

                        <Link className="navbar-brand logo_h" to={"/"}>
                            <span style={{color: 'white', fontWeight: 'bold'}}>ESSIVI SARL</span>
                        </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>

                        <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                            <ul className="nav navbar-nav menu_nav justify-content-center">
                                <li className="nav-item active"><Link className="nav-link" to="#home">Accueil</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="#about">A Propos</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="#services">Services</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to="#contact">Contact</Link></li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li className="nav-item"><Link to="/dashboard" className="tickets_btn">Se Connecter</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header