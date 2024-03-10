import { Link } from "react-router-dom";
import nav from "../assets/nav-logo.png";
import menu from "../assets/menu.webp";

export default function Navigation({
  device,
  onClick,
}: {
  device: string;
  onClick: React.MouseEventHandler<HTMLAnchorElement>;
}) {
  return (
    <menu className={`navbar-menu ${device}`}>
      {device !== "mobile" && (
        <Link to="/">
          <img src={nav} alt="Little Lemon logo" className="nav-image" />
        </Link>
      )}
      <Link className="hover-effect" to="/" onClick={onClick}>
        <h1>Home</h1>
      </Link>
      <Link className="hover-effect" to="/about" onClick={onClick}>
        <h1>About</h1>
      </Link>
      <a className="hover-effect" href={menu} target="_blank" rel="noreferrer">
        <h1>Menu</h1>
      </a>
      <Link className="hover-effect" to="/reservations" onClick={onClick}>
        <h1>Reservations</h1>
      </Link>
      <Link className="hover-effect" to="/order" onClick={onClick}>
        <h1>Order</h1>
      </Link>
      <Link className="hover-effect" to="/login" onClick={onClick}>
        <h1>Login</h1>
      </Link>
    </menu>
  );
}
