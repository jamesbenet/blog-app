import './Nav.css'
import { NavLink } from 'react-router-dom'

const Nav = () => {

    return (
        <nav>
            <div className="nav">
                <NavLink className="logo" to="/">Posts App</NavLink>
                <div className="links">
                    <NavLink className="link" to="/posts">Posts</NavLink>
                    <NavLink className="link" to="/add-post">Add Your Post</NavLink>
                </div>
            </div>
        </nav>
    )

}

export default Nav