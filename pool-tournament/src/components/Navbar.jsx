import { Link, NavLink } from 'react-router-dom'


export default function Navbar(){
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary px-3">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">🎱 Pool Tournament</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav" aria-controls="nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="nav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item"><NavLink className="nav-link" to="/register">Registration</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/groups">Groups</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/viewer">Viewer</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}