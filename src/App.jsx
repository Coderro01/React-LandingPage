import { useState } from 'react';
// import './index.css';

import Navbar from './component/Navbar';
import Superman from './component/Superman';


function App() {
	// const [count, setCount] = useState(0);

	return (
		<>
			<div>
				<Navbar />
            <Superman />

			</div>
		</>
	);
}

export default App;
