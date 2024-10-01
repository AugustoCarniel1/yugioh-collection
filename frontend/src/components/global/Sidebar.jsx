import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends Component {
	render() {
		const { isOpen, toggleSidebar } = this.props;

		return (
			<div className={`sidebar ${isOpen ? 'sidebar--open' : 'sidebar--closed'}`}>
				<button onClick={toggleSidebar}>
					{isOpen ? '<' : '>'}
				</button>
				<nav>
					<ul>
						<li><Link to="/page1">Página 1</Link></li>
						<li><Link to="/page2">Página 2</Link></li>
						<li><Link to="/page3">Página 3</Link></li>
					</ul>
				</nav>
			</div>
		);
	}
}

export default Sidebar;