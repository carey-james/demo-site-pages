import React from 'react';
import { Nav, NavLink, NavMenu} from './NavbarElements';
import { FaHouse } from "react-icons/fa6";

const Navbar = () => {
	return (
		<>
			<Nav>
				<NavMenu>
					<NavLink to='/demo-site-pages/' activeStyle>
						{FaHouse}
					</NavLink>
					<NavLink to='/demo-site-pages/about' activeStyle>
						About
					</NavLink>
					<NavLink to='/demo-site-pages/faq' activeStyle>
						FAQ
					</NavLink>
					<NavLink to='/demo-site-pages/glossary' activeStyle>
						Glossary
					</NavLink>
					<NavLink to='/demo-site-pages/wizard' activeStyle>
						Wizard
					</NavLink>
				</NavMenu>
			</Nav>
		</>
	);
};

export default Navbar;