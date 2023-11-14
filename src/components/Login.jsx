import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Login() {
  const [novo, setNovo] = useState({
    id: "",
    nome: "",
    email: "",
    senha: "",
  });
  const [error, setError] = useState("");
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNovo((prevNovo) => ({
      ...prevNovo,
      [name]: value,
    }));
  };

  let { id } = useParams();

  let metodo = "post";
  if (id) {
    metodo = "put";
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:5173/login/${id ? id : ""}`, {
      method: metodo,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(novo),
    }).then(() => {
      window.location = "/";
    });

    if (!novo.nome || !novo.email) {
      setError("Por favor, preencha todos os campos");
      return;
    }

    sessionStorage.setItem("name", novo.nome);
    sessionStorage.setItem("email", novo.email);

    history.push("/home");
  };

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:5173/login/${id}`)
        .then((resp) => {
          return resp.json();
        })
        .then((data) => {
          setNovo(data);
        });
    }
  }, [id]);

  return (
    <form onSubmit={handleSubmit}>
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
    </form>
  );
}

export default Login;