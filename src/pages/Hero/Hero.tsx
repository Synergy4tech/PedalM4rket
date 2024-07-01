import "./Hero.css";
import logo from "../../assets/logobikes.png";

const Hero = () => {
  return (
    <div className="App">
      <header className="header">
        <img src={logo} className="logo" />
        <nav className="nav">
          <a href="#" className="nav-link">
            Home
          </a>
          <a href="#" className="nav-link">
            Categorias
          </a>
          <a href="#" className="nav-link">
            Ofertas
          </a>
          <a href="#" className="nav-link">
            Contato
          </a>
        </nav>
      </header>
      <div className="container">
        <div className="product">
          <img
            src="https://via.placeholder.com/150"
            alt="Produto"
            className="product-image"
          />
          <div className="product-details">
            <h2 className="product-title">Nome do Produto</h2>
            <p className="product-price">R$ 199,99</p>
            <button className="buy-button">Comprar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
