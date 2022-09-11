import './Offers.css'
import oferta01 from "../../assets/images/oferta-01.png"
import oferta02 from "../../assets/images/oferta-02.png"
import oferta03 from "../../assets/images/oferta-03.png"


export const Offers = () => {
    return (
        <div className="offers" id="promocao">
            <h1 className="upper">Ofertas Especiais</h1>
            <p>Aproveite todas as nossas ofertas, fiquem de olhos abertos, porque smpre estamos mudando o nosso cardápio</p>            

            <div className="parent">
                <div className="div1">
                    <div className="product-details white">
                        <h3 className="upper">Burger Imperial+Batata</h3>
                        <p>250g</p>
                    </div>
                    <div className="product-details-bottom white">
                        {/* <h3>Apenas</h3>
                        <h2 className="upper">Hoje</h2> */}
                    </div>
                    <img src={oferta01} alt=""/>
                </div>
                <div className="div2">
                    <div className="product-details">
                        <h3 className="upper">Batata</h3>
                        <p>150g</p>
                    </div>
                    <img src={oferta02} alt=""/>
                </div>
                <div className="div3">
                    <div className="product-details">
                        <h3 className="upper">Sorvete</h3>
                        <p>50g</p>
                    </div>
                    <img src={oferta03} alt=""/>
                </div>
            </div>
        </div>
    )
}
