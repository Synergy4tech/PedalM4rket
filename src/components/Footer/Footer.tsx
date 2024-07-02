import './Footer.css'
import Logo from '../../assets/logo.png'
import seta from '../../assets/seta.svg'
import map from '../../assets/map.svg'
import Cell from '../../assets/CellIcon.svg'
import Whats from '../../assets/WhatsIcon.svg'
import fb from '../../assets/fb.svg'
import next from '../../assets/next.svg'

const Footer = () => {
  

    return (
      <>
      
      <div className="footer">
        <div className="supa">
        <div className="box">
            <div className="container_grid">
                <div className="item1">
                    <img src={Logo} alt=""  className='item1_logo'/>
                    <ul>
                        <li><img src={seta} alt="" /><a href="">Rodas e Motores</a></li>
                        <li><img src={seta} alt="" /><a href="">Fale Conosco</a></li>
                        <li><img src={map} alt="" /><a href="">Av. Fernando Correa da Costa, 400, Sala 05 - Poção</a></li>
                        <li><img src={map} alt="" /><a href="">Av. Historiador Rubens de Mendonça, 553 - Araés</a></li>
                        <li><img src={map} alt="" /><a href="">Cuiabá - Mato Grosso</a></li>
                        <li><img src={Cell} alt="" /><a href="">(00)00000-0000</a></li>
                        <li><img src={Whats} alt="" /><a href="">(00)00000-0000</a></li>
                    </ul>
                </div>
                <div className="item2">
                    <div className="anuncio">
                            <div className="box_perfil">
                                <div className="perfil"></div>
                                <div className="text_perfil">
                                    <ul>
                                        <li>Anúncio</li>
                                        <li>29.299 seguidores</li>
                                    </ul>
                                    
                                </div>
                                
                                
                            </div>
                            <div className="buttons_end">
                                <button> <img src={fb} alt="" />Seguir Página</button>
                                <button><img src={next} alt="" />Compartilhar</button>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div className="end">
            <p>© 2024 Synergy4tech -  Todos os direitos reservados  |  Política de Privacidade</p>
        </div>

      </div>
     
          
      
      </>
    )
  }
  
  export default Footer