import { IsNotEmpty, IsString } from 'class-validator';
import { Product } from 'src/product/product.entity';

export class RestaurantDto {
    @IsString()
    @IsNotEmpty({ message: 'Nome é obrigatório' })
    name: string;

    @IsString()
    @IsNotEmpty({ message: 'Restaurante prercisa do endereço' })
    address: string;

    @IsString()
    @IsNotEmpty({ message: 'Descrição é obrigatorio' })
    description: string;

    @IsString()
    logo_url: string;

    @IsString()
    @IsNotEmpty({ message: 'Restaurante precisar do nome do dono' })
    owner: string;

    products: Product[];
}
