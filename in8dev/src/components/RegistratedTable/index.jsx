import './index.css';
import { useEffect, useState } from 'react';

const RegistratedTable = ({ content }) => {
	const [last, setLast] = useState(1);
	const [register, setRegister] = useState();

    const registratedData = () =>
		content.map((e, i) => (
			<tr
				id={`${i}`}
				key={`Registrated__Table__key__${i}`}
			>
				<th className='Registrated__Table__Data__Content__Number'>{`${i + 1}`}</th>
				<th className='Registrated__Table__Data__Content Registrated__Table__Data__Content__Name'>{e.nome}</th>
				<th className='Registrated__Table__Data__Content Registrated__Table__Data__Content__Mail'>{e.email}</th>
				<th className='Registrated__Table__Data__Content Registrated__Table__Data__Content__Justify'>{e.nascimento}</th>
				<th className='Registrated__Table__Data__Content Registrated__Table__Data__Content__Justify Registrated__Table__Data__Content__End'>{e.telefone}</th>
			</tr>
		));

        useEffect(() => {
		if (Boolean(content)) {
			setRegister(registratedData());
			setLast(content.length + 1);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [content]);

	return (
		<section id='Registrated__Table'>
			<h2>LISTA DE CADASTRO</h2>
			<table id='Registrated__Table__Data'>
				<thead>
					<tr id='Registrated__Table__Data__Header'>
						<th className='Registrated__Table__Data__Header Registrated__Table__Data__Content__Number'></th>
						<th className='Registrated__Table__Data__Header'>NOME</th>
						<th className='Registrated__Table__Data__Header'>E-MAIL</th>
						<th className='Registrated__Table__Data__Header'>NASCIMENTO</th>
						<th className='Registrated__Table__Data__Header Registrated__Table__Data__Header__End'>TELEFONE</th>
					</tr>
				</thead>
				<tbody>{register}</tbody>
				<tfoot>
					<tr id='Registrated__Table__Data__Footer'>
						<th className='Registrated__Table__Data__Footer Registrated__Table__Data__Content__Number'>{`${last}`}</th>
						<th className='Registrated__Table__Data__Footer'></th>
						<th className='Registrated__Table__Data__Footer'></th>
						<th className='Registrated__Table__Data__Footer'></th>
						<th className='Registrated__Table__Data__Footer__End'></th>
					</tr>
				</tfoot>
			</table>
		</section>
	);
};

export default RegistratedTable;
