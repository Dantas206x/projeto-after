import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <li>
          <Link to="/"></Link>
        </li>
        <li>
          <Link to="/Novidades"></Link>
        </li>
        <li>
          <Link to="/Galeria"></Link>
        </li>
        <li>
          <Link to="/Sobre"></Link>
        </li>
        <li>
          <Link to="/Contato"></Link>
        </li>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
