import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import api from "services/api";
import "./styles.css";

export default function Register() {
  const [nome, setNome] = useState("");
  const [raca, setRaca] = useState("");
  const [tamanho, setTamanho] = useState("");
  const [vacina, setVacina] = useState("");
  const [informacoes, setInformacoes] = useState("");
  const [foto, setFoto] = useState("");

  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      nome,
      raca,
      tamanho,
      vacina,
      informacoes,
      foto,
    };

    try {
      const response = await api.post("pets", data);

      alert(`Pet ${response.data.nome} cadastrado com sucesso`);

      history.push("/hero/index");
    } catch (err) {
      alert("Erro no cadastro. Tente novamente.");
    }
  }

  return (
    <>
      <div className="container">
        <div className="card" style={{ margin: "2% 20%" }}>
          <form className="card-body">
            <div className="form-group">
              <label htmlFor="animalName">Nome do animal</label>
              <input
                type="text"
                className="form-control"
                id="animalName"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                aria-describedby="emailHelp"
              />
            </div>
            <div className="form-group">
              <label htmlFor="animalRace">Raça</label>
              <input
                type="password"
                className="form-control"
                id="animalRace"
                value={raca}
                onChange={(e) => setRaca(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="animalSize">Tamanho</label>
              <input
                type="password"
                className="form-control"
                id="animalSize"
                value={tamanho}
                onChange={(e) => setTamanho(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="animalRace">Vacinas em dia: </label>
              <select
                className="form-control col-md-2"
                value={vacina}
                onChange={(e) => setVacina(e.target.value)}
              >
                <option value={{ value: 1, label: "sim" }}> Sim</option>
                <option value={{ value: 0, label: "não" }}> Não</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">
                Informações adicionais
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                value={informacoes}
                onChange={(e) => setInformacoes(e.target.value)}
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="animalPicture">Foto</label>
              <input
                type="file"
                className="form-control-file"
                id="animalPicture"
                value={foto}
                onChange={(e) => setFoto(e.target.value)}
              />
            </div>
            <div className="text-right">
              <button
                type="submit"
                className="btn btn-danger"
                onClick={() => handleRegister()}
              >
                Salvar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
