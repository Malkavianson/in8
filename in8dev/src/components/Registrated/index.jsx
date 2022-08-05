import './index.css';
import { useEffect, useState } from 'react';
import RegistratedTable from 'components/RegistratedTable';
import RegistratedSpreadQuerySheet from 'components/RegistratedSpreadQuerySheet';

const Registrated = ({ database }) => {
	const [content, setContent] = useState();

	const addBlankLine = data => {
		let newData = [...data];
		while (newData.length < 3) {
			let blank = {
				nome: ' ',
				email: ' ',
				nascimento: ' ',
				telefone: ' ',
			};
			newData.push(blank);
		}
		return newData;
	};

	const lastVerify = async data => {
		setContent(addBlankLine(data));
	};

	useEffect(() => {
		lastVerify(database);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [database]);

	return (
		<>
			<RegistratedTable content={content} />
			<RegistratedSpreadQuerySheet content={content} />
		</>
	);
};

export default Registrated;
