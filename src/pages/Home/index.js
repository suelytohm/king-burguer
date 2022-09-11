import { Header } from '../../components/Header'
import { Offers } from '../Offers'
import './Home.css'

export const Home = () => {
  return (
    <div className="home" id="home">
      <Header />
      <Offers />
    </div>
  )
}
