import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import MapDark from "../../assets/mapDark.svg";
import filtro from "../../assets/filtro.svg";
import Seta2 from "../../assets/seta2.svg";
import CarIcon from "../../assets/carIcon.svg";
import BikeIcon from "../../assets/bikeIcon.svg";
import PedalIcon from "../../assets/PedalIcon.svg";
import './Hero.css';
import RetangleAdvertise from '../../components/RetangleAdvertise/RetangleAdvertise';
import ResalesBox from '../../components/ResalesBox/ResalesBox';

const Hero = () => {
  

    return (
      <>
        <Header />
        <div className="search-container">
          
          <div className="hero-box">
          <div className="vehicle-form-container">
            <form className="vehicle-form">

              <p>Encontre seu veÍculo</p>
              <input type="text" id="tipo" name="tipo" placeholder="Tipo" />
              <input type="text" id="veiculo" name="veiculo" placeholder="Veiculo" />
              <input type="text" id="valoMedio" name="valoMedio" placeholder="Valor Medio" />
              <input type="text" id="moto" name="motorização" placeholder="Motorização" /> 
              <input type="text" id="ano" name="ano" placeholder="Ano" /> 
              <input type="text" id="cidade" name="cidade" placeholder="Cidade" /> 
              
        
              <button type="submit">ENCONTRAR</button>
              <div className="advanced-options">
              <span>
                <img src={filtro} alt="" />
                <a href="#advanced-search"> Busca avançada</a>
              </span>
              <span>
                <img src={MapDark} alt="" />
                <a href="#dealer-search"> Revendas por cidade</a>
              </span>
            </div>
            </form>
            
          </div>
        </div>
          <div className="leftSide">
            
            <div className="left-text">
              <h1>RODAS & MOTORES</h1>
              <p>
                Transformando trajetos em jornadas. Bicicletas e <br /> carros para
                cada caminho.
              </p>
            </div>
            <div className="left-button">
              <button>
                <img src={PedalIcon} /> VENDER VEICULO
              </button>
              <button>
                <img src={BikeIcon} /> REVENDAS
              </button>
              <button>
                <img src={CarIcon} /> AUTOMOVEIS
              </button>
          
            </div>
          </div>
        </div>



        <div className="advertise-container">
          <div className="advertise-box">
          <RetangleAdvertise/>
          <span>
            <img src={Seta2} alt="" />
            <p>Revendas</p>
          </span>
          <ResalesBox/>
          <RetangleAdvertise/>
          <span>
            <img src={Seta2} alt="" />
            <p>Veículos em destaque</p>
          </span>
          <RetangleAdvertise/>
          </div>

          </div>
        <Footer />
      </>
    );
  }
  
  export default Hero
  