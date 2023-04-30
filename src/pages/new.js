import "../styles/new.scss";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import { DriveFolderUploadOutlined } from "@mui/icons-material";
import { useState } from "react";

const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  const [nom, setNom] = useState("");
  const [prenoms, setPrenoms] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [adresse, setAdresse] = useState("");
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "Nom":
        setNom(value);
        break;
      case "Prénoms":
        setPrenoms(value);
        break;
      case "Email":
        setEmail(value);
        break;
      case "Telephone":
        setTelephone(value);
        break;
      case "Adresse":
        setAdresse(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(" http://127.0.0.1:5000/agents/create", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ nom, prenoms, email, telephone, adresse }),
    });
    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      setError("Something went wrong");
    }
    setNom("");
    setPrenoms("");
    setEmail("");
    setTelephone("");
    setAdresse("");
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form onSubmit={handleSubmit}>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlined className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    name={input.label}
                    type={input.type}
                    value={
                      input.label === "Email"
                        ? email
                        : input.label === "Nom"
                        ? nom
                        : input.label === "Prénoms"
                        ? prenoms
                        : input.label === "Telephone"
                        ? telephone
                        : input.label === "Adresse"
                        ? adresse
                        : ""
                    }
                    onChange={handleChange}
                    placeholder={input.placeholder}
                  />
                </div>
              ))}
              <button type="submit">Envoyer</button>
              {error && <span className="error">{error}</span>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
