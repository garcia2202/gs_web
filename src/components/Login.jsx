import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Login/login.css";
import dados from '../../dados.json'

function Login() {
  const [novo, setNovo] = useState({
    id: "",
    nome: "",
    email: "",
    senha: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNovo((prevNovo) => ({
      ...prevNovo,
      [name]: value,
    }));
  };

  const autenticarUsuario = () => {
    const user = dados.find(
      (u) => u.email === novo.email && u.senha === novo.senha
    );

    return user;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!novo.nome || !novo.email || !novo.senha) {
      setError("Por favor, preencha todos os campos");
      return;
    }

    const authenticatedUser = autenticarUsuario();

    if (authenticatedUser) {
      sessionStorage.setItem("name", authenticatedUser.nome);
      sessionStorage.setItem("email", authenticatedUser.email);
      navigate("/home");
    } else {
      setError("Credenciais inválidas. Por favor, verifique seus dados de login.");
    }
  };
    

  return (
    <form onSubmit={handleSubmit}>
      <div className="login_container">
        <div className="login">
          <div>
            <label htmlFor="name">Nome:</label>
            <input
              type="text"
              id="name"
              name="nome"
              value={novo.nome}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={novo.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              id="password"
              name="senha"
              value={novo.senha || ""}
              onChange={handleChange}
            />
          </div>
          {error && <p>{error}</p>}
          <button type="submit">Login</button>
        </div>
      </div>
    </form>
  );
}

export default Login;
