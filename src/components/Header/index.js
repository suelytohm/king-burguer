import './Header.css'
import King from '../../assets/images/King_burger.png'
import { Button } from '../Button'

export const Header = () => {
  return (
    <div className="session">
      <div className="main">
        <h1>Uma nova experiência!</h1>
        <img src={King} alt="king_burguer" />
        <h2>
          Para quem tem um <span>Apetite de um REI!</span>
        </h2>
        <Button>Comprar Agora</Button>
      </div>
    </div>
  )
}
