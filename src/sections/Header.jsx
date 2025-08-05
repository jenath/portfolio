import './section_style/Header.css'
import { Outlet, Link } from "react-router-dom"

const Header = () => {
  return (
    <>
      <section>
        <ul>
          <li>
            <Link to="/portfolio">Home</ Link>
          </li>
          <li>
            <Link to="/about">About Me</ Link>
          </li>
          <li>
            <Link to="/projects">Projects</ Link>
          </li>
        </ul>
      </section>

      <Outlet />
    </>
  )
}

export default Header
