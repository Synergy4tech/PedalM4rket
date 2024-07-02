import './Footer.css'
import Logo from '../../assets/logo.png'

const Footer = () => {
  

    return (
      <>
      
      <div className="footer">
        <div className="box">
            <div className="container_grid">
                <div className="item1">
                    <img src={Logo} alt="" />
                    <span><img src='' alt="" /><p>Rodas e Motores</p></span>
                    <span><img src="" alt="" /><p>Fale Conosco</p></span>
                    <span><img src="" alt="" /><p>Av. Fernando Correa da Costa, 400, Sala 05 - Poção</p></span>
                    <span><img src="" alt="" /><p>Av. Historiador Rubens de Mendonça, 553 - Araés</p></span>
                    <span><img src="" alt="" /><p>Cuiabá - Mato Grosso</p></span>
                    <ul>
                        <li><img src="" alt="" /><a href="">(00)00000-0000</a></li>
                        <li><img src="" alt="" /><a href="">(00)00000-0000</a></li>
                    </ul>
                </div>
                <div className="item2">
                    <div className="anuncio">

                    </div>
                </div>
            </div>
        </div>
      </div>
     
          
      
      </>
    )
  }
  
  export default Footer