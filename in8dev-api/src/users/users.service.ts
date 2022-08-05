import {
	Injectable,
	NotFoundException,
	UnprocessableEntityException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
	private userSelect = {
		id: true,
		nome: true,
		email: true,
		nascimento: true,
		telefone: true,
		createdAt: true,
		updatedAt: true,
	};

	constructor(private readonly prisma: PrismaService) {}

	handleErrorConstraintUnique = (error: Error): never => {
		const splitedMessage = error.message.split('`');

		const errorMessage = `${
			splitedMessage[splitedMessage.length - 2]
		} já cadastrado`;

		throw new UnprocessableEntityException(errorMessage);
	};

	async verifyIdAndReturnUser(id: string): Promise<User> {
		const user: User = await this.prisma.user.findUnique({
			where: { id },
			select: this.userSelect,
		});

		if (!user) {
			throw new NotFoundException(`Id: '${id}' Não encontrado`);
		}

		return user;
	}

	async create(dto: CreateUserDto): Promise<User | void> {
		const data: CreateUserDto = {
			nome: dto.nome,
			email: dto.email,
			nascimento: dto.nascimento,
			telefone: dto.telefone,
		};

		return await this.prisma.user
			.create({ data, select: this.userSelect })
			.catch(this.handleErrorConstraintUnique);
	}

	async findAll(): Promise<User[]> {
		return this.prisma.user.findMany({ select: this.userSelect });
	}

	async findOne(id: string): Promise<User> {
		return await this.verifyIdAndReturnUser(id);
	}

	async update(id: string, dto: UpdateUserDto): Promise<User | void> {
		await this.verifyIdAndReturnUser(id);
		const data: CreateUserDto = {
			nome: dto.nome,
			email: dto.email,
			nascimento: dto.nascimento,
			telefone: dto.telefone,
		};

		return await this.prisma.user
			.update({ where: { id }, data, select: this.userSelect })
			.catch(this.handleErrorConstraintUnique);
	}

	async remove(id: string) {
		await this.verifyIdAndReturnUser(id);

		return await this.prisma.user.delete({
			where: { id },
			select: { nome: true, email: true },
		});
	}
}
