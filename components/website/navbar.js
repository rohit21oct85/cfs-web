export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container"> <a className="navbar-brand" href="index.php"><img src="../images/logo.png" className="img-fluid" alt="logo"/></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
            <div className="collapse navbar-collapse" id="navbarsExample09">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item active"> <a className="nav-link" href="q-and-a.php">Q and A </a> </li>
                <li className="nav-item"> <a className="nav-link" href="#">Solutions Manual </a> </li>
                <li className="nav-item"> <a className="nav-link" href="#">Writing Help </a> </li>
                <li className="nav-item login_signup_top"> <a className="nav-link" href="#">Login / Signup <i className="fa fa-user"></i></a> </li>  
                </ul>
            </div>
            </div>
        </nav>
    )
}
  