import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/global/Sidebar';
import Navbar from './components/global/Navbar';
import Page1 from './components/pages/Page1';


class App extends Component {
	state = {
		isSidebarOpen: true
	}

	toggleSidebar = () => {
		this.setState(prevState => ({ isSidebarOpen: !prevState.isSidebarOpen }))
	}

	render() {
		const { isSidebarOpen } = this.state

		return (
			<Router>
				<div className="app">
					<Sidebar isOpen={isSidebarOpen} toggleSidebar={this.toggleSidebar} />
					<div className={`content ${isSidebarOpen ? 'content--expanded' : 'content--collapsed'}`}>
						<Navbar />
						<div className={`content ${isSidebarOpen ? 'content--expanded' : 'content--collapsed'}`}>
							<Routes>
								<Route path="/page1" element={<Page1 />} />
							</Routes>
						</div>
					</div>
				</div>
			</Router>
		)
	}
}

export default App;