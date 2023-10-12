import React from 'react';
import { Nav, NavLink, NavMenu} from './NavbarElements';

const Navbar = () => {
	return (
		<>
			<Nav>
				<NavMenu>
					<NavLink to='/about' activeStyle>
						About
					</NavLink>
					<NavLink to='/faq' activeStyle>
						FAQ
					</NavLink>
					<NavLink to='/glossary' activeStyle>
						Glossary
					</NavLink>
					<NavLink to='/wizard' activeStyle>
						Wizard
					</NavLink>
				</NavMenu>
			</Nav>
		</>
	);
};

export default Navbar;