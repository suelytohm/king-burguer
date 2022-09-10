import './Navbar.css'
import logo from '../../assets/images/logo.png'
import instagram from '../../assets/images/instagram.png'
import ifood from '../../assets/images/ifood.png'
import whatsapp from '../../assets/images/whatsapp.png'
import { Link } from 'react-router-dom'
import { Button } from '../Button'

export const Navbar = () => {
  return (
    <nav>
      <div></div>
      <div className="brand">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/">Promoção</Link>
        <Link to="/">Cardápio</Link>
        <Link to="/">Comentários</Link>
        <Link to="/">Contato</Link>
      </div>
      <div className="actions">
        <Link to="/">
          <img src={ifood} id="ifood" alt="ifood" />
        </Link>
        <Link to="/">
          <img src={instagram} id="instagram" alt="instagram" />
        </Link>
        <div className="vertical-separator"></div>
        <Link to="/">
          <Button>
            <img src={whatsapp} alt="whatsapp" />
            Contato
          </Button>
        </Link>
      </div>
      <div></div>
    </nav>
  )
}
