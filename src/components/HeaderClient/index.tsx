import carrinho from '../../assets/cart.svg';
import './style.css'

function HeaderClient() {
    return (
        <>
            <header className="dsc-header-client">
                <nav className="dsc-container">
                    <h1>DSCommerce</h1>
                    <div className="dsc-navbar-right">
                        <div className="dsc-menu-items-container">
                            <div className="dsc-menu-item">
                                <img src={carrinho} alt="Carrinho de compras" />
                            </div>
                        </div>
                        <a href="#">Entrar</a>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default HeaderClient