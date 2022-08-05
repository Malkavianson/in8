import './index.css';
import { useEffect, useState } from 'react';

const RegistratedSpreadQuerySheet = ({ content }) => {
	const [data, setData] = useState([]);
	const [last, setLast] = useState(1);

	const spreadData = () =>
		content.map((e, i) => (
			<ul key={`Data__Info__${i}`}>
				<li>
					<input
						type='radio'
						className='Nav__Tabs__Radio'
						id={`tab${i}`}
						name='tabs'
						defaultChecked={i === 0}
					/>
					<label htmlFor={`tab${i}`}> {i + 1} </label>
					<div className='Nav__Tab__Content'>
						<table>
							<thead>
								<tr>
									<th>NOME</th>
									<th>E-MAIL</th>
									<th>NASC.</th>
									<th>TEL.</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th>{e.nome}</th>
									<th>{e.email}</th>
									<th>{e.nascimento}</th>
									<th>{e.telefone}</th>
								</tr>
							</tbody>
						</table>
					</div>
				</li>
			</ul>
		));

	useEffect(() => {
		if (Boolean(content)) {
			setData(spreadData());
			setLast(content.length + 1);
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [content]);
	return (
		<section id='registratedSpreadQuerySheet'>
			<h2>LISTA DE CADASTRO</h2>
			<div>
				<nav className='Nav__Tabs'>
					{data}
					<ul>
						<li>
							<input
								type='radio'
								className='Nav__Tabs__Radio'
								id='tabLast'
								name='tabs'
							/>
							<label htmlFor='tabLast'> {last} </label>
							<div className='Nav__Tab__Content'>
								<table>
									<thead>
										<tr>
											<th>NOME</th>
											<th>E-MAIL</th>
											<th>NASC.</th>
											<th>TEL.</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<th></th>
											<th></th>
											<th></th>
											<th></th>
										</tr>
									</tbody>
								</table>
							</div>
						</li>
					</ul>
				</nav>
			</div>
		</section>
	);
};

export default RegistratedSpreadQuerySheet;
