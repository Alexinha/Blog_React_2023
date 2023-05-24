// sfc + tab create functional components
import { Link } from 'react-router-dom'; // let react to handle the web page link requests in the browser

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Alexinha's Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" style={{
                    color: "white",
                    backgroundColor: '#f1356d',
                    borderRadius: '8px'
                }}>New Blog</Link>
            </div>
        </nav>
    );
}

export default Navbar;