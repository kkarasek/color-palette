import React from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom';

import Main from './pages/Main';

const App = () => {
	return (
		<>
			<Router initialEntries={['/colors']} initialIndex={0}>
				<Routes>
					<Route path="/" element={<Navigate to="/page/1" />} />
					<Route path="/page/:pageId" element={<Main />} />
				</Routes>
			</Router>
		</>
	);
};

export default App;
