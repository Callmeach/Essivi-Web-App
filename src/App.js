import Dashboard from "./pages/dashborad";
import Login from "./pages/login";
import Single from "./pages/single";
import New from "./pages/new";
import { productInputs, userInputs } from "./data/formSource";
import './styles/dark.scss';
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { DarkModeContext } from "./hooks/darkModeContext";
import React, { useState, useEffect, useContext } from "react";
import Home from "./pages/home";
import PrivateRoute from "./components/privateRoute";
import ListAgents from "./pages/listAgents";
import ListClients from "./pages/listClients";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      setIsLoggedIn(true)
    }
  }, [])

  const handleLogin = (token) => {
    localStorage.setItem('token', token)
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    setIsLoggedIn(false)
  }

  const { darkMode } = useContext(DarkModeContext);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/dashboard",
      element: <PrivateRoute component={Dashboard} isLoggedIn={isLoggedIn} onLogout={handleLogout} />
    },
    {
      path: "/login",
      element: isLoggedIn ? <Navigate to={'/dashboard'} /> : <Login onLogin={handleLogin} />
    },
    {
      path: "agents",
      children: [
        {
          index: true,
          element: <ListAgents title="Liste des agents" />,
        },
        {
          path: ":agentId",
          element: <Single />,
        },
        {
          path: "new",
          element: <New inputs={userInputs} title="Ajouter un nouvel agent" />,
        },
      ],
    },
    {
      path: "clients",
      children: [
        {
          index: true,
          element: <ListClients title="Liste des clients" />,
        },
        {
          path: ":clientId",
          element: <Single />,
        },
        {
          path: "new",
          element: <New inputs={productInputs} title="Ajouter nouveau client" />,
        },
      ],
    },
  ]);
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
