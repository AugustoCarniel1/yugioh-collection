import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = (props) => {
	const { isOpen, toggleSidebar } = props

	return (
		<div className={`sidebar ${isOpen ? 'sidebar--open' : 'sidebar--closed'}`}>
			<button onClick={toggleSidebar}>
				{isOpen ? '<' : '>'}
			</button>
			<nav>
				<ul>
					<li><Link to="/page1">Página 1</Link></li>
				</ul>
			</nav>
		</div>
	)
}

export default Sidebar;