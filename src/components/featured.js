import { KeyboardArrowDown, KeyboardArrowUpOutlined, MoreVert } from "@mui/icons-material";
import { CircularProgressbar } from "react-circular-progressbar";
import "../styles/featured.scss";
import 'react-circular-progressbar/dist/styles.css';

const Featured = ({revenu, revenuTotal}) => {
    
  return (
    <div className="featured">
        <div className="top">
            <h1 className="title">Revenu Total</h1>
            <MoreVert fontSize="small" />
        </div>
        <div className="bottom">
            <div className="featuredChart">
                <CircularProgressbar value={70} text={'70%'} strokeWidth={5} />
            </div>
            <p className="title>">Chiffre d'affaire réalisé aujourd'hui</p>
            <p className="amount">{revenu} FCFA</p>
            <p className="desc">
                Livraisons toujours en cours.
                Les dernieres peuvent ne pas etre incluses
            </p>
            <div className="summary">
                <div className="item">
                    <div className="itemTitle">Mois Dernier</div>
                    <div className="itemResult negative">
                        <KeyboardArrowDown fontSize="small" />
                        <div className="resultAmount">0 FCFA</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Semaine Derniere</div>
                    <div className="itemResult positive">
                        <KeyboardArrowUpOutlined fontSize="small" />
                        <div className="resultAmount">12500 FCFA</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Total</div>
                    <div className="itemResult positive">
                        <KeyboardArrowUpOutlined fontSize="small" />
                        <div className="resultAmount">{revenuTotal} FCFA</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Featured;
