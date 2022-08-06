import './index.css';
import { mask, unMask } from 'remask';
import { useState } from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';
import Api from 'helpers/api';

const error = message => {
	return toast.error(message, {
		style: {
			borderRadius: '1rem',
			fontSize: '3rem',
			fontFamily: "'Roboto Regular', Arial",
		},
	});
};
const validateName = name => {
	if (Boolean(name)) {
		return Boolean(name);
	} else {
		error('Nome precisa estar preenchido');
	}
};
const validateEmail = mail => {
	const isEmail = /\S+@\S+\.\S+/;
	if (isEmail.test(mail)) {
		return isEmail.test(mail);
	} else {
		error('Email precisa estar no formato name@mail.com');
	}
};
const validateDate = date => {
	const isDate =
		/^(?:(?:31(\/)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/)(?:0?2)\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:19|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
	if (isDate.test(date) && date.length === 10) {
		return isDate.test(date) && date.length === 10;
	} else {
		error('Data precisa estar no formato dd/mm/aaaa');
	}
};
const validatePhone = phone => {
	if (phone.length >= 14) {
		return phone.length >= 14;
	} else {
		error('Telefone precisa estar no formato (ddd) 9 xxxx-xxx ou (ddd) xxxx-xxx');
	}
};

const Registration = ({ getData }) => {
	const pushNewData = () => {
		const data = document.querySelectorAll('input');
		const isName = validateName(data[0].value);
		const isEmail = validateEmail(data[1].value);
		const isDate = validateDate(data[2].value);
		const isPhone = validatePhone(data[3].value);
		if (isName && isEmail && isDate && isPhone) {
			const newSubscription = {
				nome: data[0].value,
				email: data[1].value,
				nascimento: data[2].value,
				telefone: data[3].value,
			};
			axios
				.post(Api.userCreate(), newSubscription)
				.then(res => {
					if (res.status === 201) {
						getData();
						toast.success('Cadastro realizado com sucesso', {
							style: {
								borderRadius: '1rem',
								fontSize: '3rem',
								fontFamily: "'Roboto Regular', Arial",
							},
						});
					} else {
						getData();
					}
				})
				.catch(err => error(`Email ou telefone já cadastrado\n '${err}'`));
			data[0].value = '';
			data[1].value = '';
			setTelValue('');
			setDateValue('');
		}
	};
	const [telValue, setTelValue] = useState('');

	const telMask = e => {
		const tel = mask(unMask(e.target.value), ['(99) 9999-9999', '(99) 9 9999-9999']);
		setTelValue(tel);
	};
	const [dateValue, setDateValue] = useState('');

	const dateMask = e => {
		const date = mask(e.target.value, ['99/99/9999']);
		setDateValue(date);
	};

	return (
		<section id='Registration__Form'>
			<form id='Register__Form__Container'>
				<fieldset
					form='Register__Form__Container'
					name='Register__Form__Container'
				>
					<legend>CADASTRO</legend>
					<fieldset>
						<label htmlFor='nome'>Nome</label>
						<input
							required
							type='text'
							id='nome'
							name='nome'
							// placeholder='Fulano Beltrano de Oliveira da Silva'
							title='Nome'
						/>
					</fieldset>
					<fieldset>
						<label htmlFor='email'>E-mail</label>
						<input
							required
							type='email'
							id='email'
							name='email'
							// placeholder='fulanobos@gmail.com'
							title='email'
						/>
					</fieldset>
					<fieldset>
						<label htmlFor='data'>Nascimento</label>
						<input
							required
							type='text'
							id='data'
							name='data'
							// placeholder='13/10/1995'
							title='Data de Nascimento'
							onChange={dateMask}
							value={dateValue}
						/>
					</fieldset>
					<fieldset>
						<label htmlFor='telefone'>Telefone</label>
						<input
							required
							type='text'
							id='telefone'
							name='telefone'
							// placeholder='(31) 9 9666-1111'
							title='Telefone'
							onChange={telMask}
							value={telValue}
						/>
					</fieldset>
				</fieldset>
				<button
					type='submit'
					onClick={e => {
						e.preventDefault();
						e.stopPropagation();
						pushNewData();
					}}
				>
					CADASTRAR
				</button>
			</form>
		</section>
	);
};

export default Registration;
