import "./Search.css";
import Map from "../../assets/map.svg";
import Busca from "../../assets/seta.svg";
import ImgGG from "../../assets/bike.png";

const Search = () => {
  return (
    <div className="search-container">
      <div className="vehicle-form-container">
        <form className="vehicle-form">
          {" "}
          Encontre seu veículo:
          <div className="form-field">
            <select name="type" defaultValue="">
              <option value="" disabled hidden>
                Selecione o tipo
              </option>
              <option value="tipo1">Tipo 1</option>
              <option value="tipo2">Tipo 2</option>
              <option value="tipo3">Tipo 3</option>
              <option value="tipo4">Tipo 4</option>
              <option value="tipo5">Tipo 5</option>
            </select>
          </div>
          <div className="form-field">
            <select name="vehicle" defaultValue="">
              <option value="" disabled hidden>
                Selecione o veículo
              </option>
              <option value="veiculo1">Veículo 1</option>
              <option value="veiculo2">Veículo 2</option>
              <option value="veiculo3">Veículo 3</option>
              <option value="veiculo4">Veículo 4</option>
              <option value="veiculo5">Veículo 5</option>
            </select>
          </div>
          <div className="form-field">
            <select name="averageValue" defaultValue="">
              <option value="" disabled hidden>
                Selecione o valor médio
              </option>
              <option value="valor1">Valor 1</option>
              <option value="valor2">Valor 2</option>
              <option value="valor3">Valor 3</option>
              <option value="valor4">Valor 4</option>
              <option value="valor5">Valor 5</option>
            </select>
          </div>
          <div className="form-field">
            <select name="motorization" defaultValue="">
              <option value="" disabled hidden>
                Selecione a motorização
              </option>
              <option value="motor1">Motor 1</option>
              <option value="motor2">Motor 2</option>
              <option value="motor3">Motor 3</option>
              <option value="motor4">Motor 4</option>
              <option value="motor5">Motor 5</option>
            </select>
          </div>
          <div className="form-field">
            <select name="year" defaultValue="">
              <option value="" disabled hidden>
                Selecione o ano
              </option>
              <option value="ano1">Ano 1</option>
              <option value="ano2">Ano 2</option>
              <option value="ano3">Ano 3</option>
              <option value="ano4">Ano 4</option>
              <option value="ano5">Ano 5</option>
            </select>
          </div>
          <div className="form-field">
            <select name="city" defaultValue="">
              <option value="" disabled hidden>
                Selecione a cidade
              </option>
              <option value="cidade1">Cidade 1</option>
              <option value="cidade2">Cidade 2</option>
              <option value="cidade3">Cidade 3</option>
              <option value="cidade4">Cidade 4</option>
              <option value="cidade5">Cidade 5</option>
            </select>
          </div>
          <button type="submit">ENCONTRAR</button>
        </form>
        <div className="advanced-options">
          <span>
            <img src={Busca} alt="" />
            <a href="#advanced-search"> Busca avançada</a>
          </span>
          <span>
            <img src={Map} alt="" />
            <a href="#dealer-search"> Revendas por cidade</a>
          </span>
        </div>
      </div>
      <div className="img_container">
        <img src={ImgGG} alt="" className="img_car" />
        <div className="img_text">
          <h1>RODAS & MOTORES</h1>
          <p>
            Transformando trajetos em jornadas. Bicicletas e carros para cada
            caminho.
          </p>
        </div>
        <div className="img_button">
          <button>
            <img src={Map} /> VENDER VEICULO
          </button>
          <button>
            <img src={Map} /> REVENDAS
          </button>
          <button>
            <img src={Map} /> AUTOMOVEIS
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;


// substituir os icones do botão e personalizar os mesmos