import Lander from 'components/Lander';
import Registrated from 'components/Registrated';
import Registration from 'components/Registration';
import axios from 'axios';
import { useState, useEffect } from 'react';
import './index.css';

const Main = () => {
	const [database, setDatabase] = useState([]);
	const getData = () => {
		axios.get('http://localhost:3333/users').then(res => setDatabase(res.data));
	};
	useEffect(() => {
		getData();
	}, [database]);

	return (
		<>
			<Lander />
			<Registration getData={() => getData()} />
			<Registrated database={database} />
		</>
	);
};

export default Main;
