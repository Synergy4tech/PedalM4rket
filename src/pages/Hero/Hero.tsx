import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import MapDark from "../../assets/mapDark.svg";
import filtro from "../../assets/filtro.svg";
import Seta2 from "../../assets/seta2.svg";
import CarIcon from "../../assets/carIcon.svg";
import BikeIcon from "../../assets/bikeIcon.svg";
import PedalIcon from "../../assets/PedalIcon.svg";
import Lupa from "../../assets/lupa.svg";
import Auto from "../../assets/autofalante.svg";
import './Hero.css';
import RetangleAdvertise from '../../components/RetangleAdvertise/RetangleAdvertise';
import ResalesBox from '../../components/ResalesBox/ResalesBox';
import AdvertiseBox from '../../components/AdvertiseBox/AdvertiseBox';
import Carrosel from '../../components/Carrosel/Carrosel';

const Hero = () => {
  

    return (
      <>
        <Header />
        <div className="search-container">
          <div className="hero-container">
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
          <Carrosel/>
          <RetangleAdvertise/>
          </div>

          </div>

          <div className="section-automobiles">
            <div className="automobiles-box">
              <h1>AUTOMOVEIS</h1>
              <p>Anuncie ou encontre aqui seu automovel</p>
              <div className="automobiles-inputs-box">
              <input type="text" id="pesquisa" name="pesquisa" placeholder="Pesquisar automoveis" />
              <input type="text" id="tipo" name="tipo" placeholder="Tipo" />
              <input type="text" id="cidade" name="cidade" placeholder="Cidade" /> 
              <input type="text" id="local" name="local" placeholder="Local" /> 
              <button><img src={Lupa} alt="" /></button>
              </div>
              <span><img src={Auto} alt="" /><a href="">Anuncie aqui seu automovel</a></span>
            </div>
            
          </div>

         <AdvertiseBox/>

        <Footer />
      </>
    );
  }
  
  export default Hero
  