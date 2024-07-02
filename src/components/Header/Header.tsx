import './Header.css'
import Logo from '../../assets/logo.png'
import CellIcon from '../../assets/CellIcon.svg'
import WhatsIcon from '../../assets/WhatsIcon.svg'
import PerfilIcon from '../../assets/PerfilIcon.svg'
import Mic from '../../assets/mic.svg'

const Header = () => {
    return (
        <>
            <div className="header">
                <div className="container_header">
                    <div className="smallOne">
                        <div className="box">
                            <div className="content">
                                <p className='alarmText'>O Rodas & Motores não solicita códigos pelo celular.</p>
                                <span>
                                    <img src={CellIcon} alt="" />
                                    <a href="http://" target="_blank" rel="noopener noreferrer">(00)00000-0000</a>
                                </span>
                                <span>
                                    <img src={CellIcon} alt="" />
                                    <a href="http://" target="_blank" rel="noopener noreferrer">(00)00000-0000</a>
                                </span>
                                <span>
                                    <img src={WhatsIcon} alt="" />
                                    <a href="http://" target="_blank" rel="noopener noreferrer">(00)00000-0000</a>
                                </span>
                                <span>
                                    <img src={PerfilIcon} alt="" />
                                    <a href="http://" target="_blank" rel="noopener noreferrer" className='loginLink'>Login</a>
                                </span>
                                <p>ou</p>
                                <span><a href="http://" target="_blank" rel="noopener noreferrer" className='registerLink'>Cadastro</a></span>
                            </div>
                        </div>
                    </div>
                    <div className="bigOne">
                        <div className="box">
                            <figure><img src={Logo} alt="" /></figure>
                            <nav>
                                <ul>
                                    <li><a href="">BUSCA AVANÇADA</a></li>
                                    <li><a href="">REVENDA</a></li>
                                    <li><a href="">AUTOMOVEIS</a></li>
                                    <li><a href="">SERVIÇOS</a></li>
                                </ul>
                                <button> <img src={Mic} alt="" /> ANUNCIE</button>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
