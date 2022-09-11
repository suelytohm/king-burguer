import "./Footer.css"
export const Footer = () => {
    return (
        <footer>
            <p>
                <strong>2022 <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} /> EmpireBurger.</strong> Todos os direitos reservados.
            </p>
        </footer>
    )
}
