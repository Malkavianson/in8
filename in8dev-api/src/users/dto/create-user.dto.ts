import { ApiProperty } from '@nestjs/swagger';
import {
	IsEmail,
	IsNotEmpty,
	IsString,
	Matches,
	MinLength,
} from 'class-validator';

export class CreateUserDto {
	@IsString()
	@IsNotEmpty()
	@ApiProperty({
		example: 'Fulano Beltrano de Oliveira da Silva',
		description: 'Nome do cadastrado',
	})
	nome: string;

	@IsEmail()
	@ApiProperty({
		example: 'fulanobos@gmail.com',
		description: 'Email  do cadastrado',
	})
	email: string;

	@IsString()
	@MinLength(10)
	@Matches(
		/^(?:(?:31(\/)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/)(?:0?2)\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:19|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,
		{
			message: 'Data de nascimento precisa estar no formato -> DD/MM/AAAA',
		},
	)
	@ApiProperty({
		example: '13/10/1995',
		description: 'Nascimento do cadastrado',
	})
	nascimento: string;

	@IsString()
	@MinLength(14)
	@Matches(
		/\(([1-9])([1-9])\)\ \9\ \d{4}\-\d{4}|\(([1-9])([1-9])\)\ \3\d{3}\-\d{4}.*$/,
		{
			message:
				'Telefone precisa estar nos formatos -> (XX) 9 NNNN-NNNN ou (XX) 3XXX-XXXX',
		},
	)
	@ApiProperty({
		example: '(31) 9 9666-1111',
		description: 'Telefone do cadastrado',
	})
	telefone: string;
}
