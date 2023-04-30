import {
  AccountBalanceWalletOutlined,
  KeyboardArrowUp,
  MonetizationOnOutlined,
  PersonOutlined,
  ShoppingCartCheckoutOutlined,
} from "@mui/icons-material";
import "../styles/widget.scss";

const Widget = ({ type, amount }) => {
  let data;

  //temporary
  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "AGENTS COMMERCIAUX",
        isMoney: false,
        link: "Voir tous les agents",
        icon: (
          <PersonOutlined
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "CLIENTS",
        isMoney: false,
        link: "Voir tous les clients",
        icon: (
          <ShoppingCartCheckoutOutlined
            className="icon"
            style={{
              color: "goldenrod",
              backgroundColor: "rgba(218, 165, 32, 0.2)",
            }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "LIVRAISONS DU JOUR",
        isMoney: false,
        link: "Voir la liste",
        icon: (
          <MonetizationOnOutlined
            className="icon"
            style={{
              color: "green",
              backgroundColor: "rgba(0, 128, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "QUANTITE",
        isMoney: false,
        link: "Voir details",
        icon: (
          <AccountBalanceWalletOutlined
            className="icon"
            style={{
              color: "purple",
              backgroundColor: "rgba(128, 0, 128, 0.2)",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {amount} {data.isMoney && "FCFA"}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUp />
          {diff}%
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
