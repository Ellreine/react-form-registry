import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import { ValidForm } from './ValidForm';
import { MyHomeWork } from './MyHomeWork';
import { MyHomeWorkRHF } from './MyHomeWorkRHF';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		{/* <App />
		<ValidForm /> */}
		<MyHomeWork />
		<MyHomeWorkRHF />
	</React.StrictMode>,
);
