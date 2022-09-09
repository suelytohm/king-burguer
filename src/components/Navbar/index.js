import './Navbar.css'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'
import { Button } from '../Button'

export const Navbar = () => {
  return (
    <nav>
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
        <Button>Contato</Button>
        <Button>Contato</Button>
        <Button>Contato</Button>
      </div>
    </nav>
  )
}
