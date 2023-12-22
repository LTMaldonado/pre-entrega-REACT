import navBarStyles from "./NavBar.module.css"
import CardWidget from "../CardWidget/CardWidget"

const NavBar = () => {
    return ( 
    <nav>
        <h3>Shanus</h3>
        <div>
            <button>Inicio</button>
            <button>Productos</button>
            <button>Carro</button>
        </div>
        <CardWidget />
    </nav>)
}
export default NavBar