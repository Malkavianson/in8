import Lander from 'components/Lander';
import Registrated from 'components/Registrated';
import Registration from 'components/Registration';
import axios from 'axios';
import { useState, useEffect } from 'react';
import './index.css';
import Api from 'helpers/api';

const Main = () => {
	const [database, setDatabase] = useState([]);
	const getData = () => {
		axios.get(Api.usersList()).then(res => setDatabase(res.data));
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
