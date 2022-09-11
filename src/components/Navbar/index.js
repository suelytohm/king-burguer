import './Navbar.css'
import logo from '../../assets/images/logo.png'
import instagram from '../../assets/images/instagram.png'
import ifood from '../../assets/images/ifood.png'
import whatsapp from '../../assets/images/whatsapp.png'
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
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
        <Link smooth to="home">Home</Link>
        <Link smooth to="promocao">Promoção</Link>
        <Link smooth to="/">Cardápio</Link>
        <Link smooth to="/">Comentários</Link>
        <Link smooth to="/">Contato</Link>
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
