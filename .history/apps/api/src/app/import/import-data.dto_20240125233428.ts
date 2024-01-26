import { CreateAccountDto } from '@portfoolio/api/app/account/create-account.dto';
import { CreateOrderDto } from '@portfoolio/api/app/order/create-order.dto';
import { Type } from 'class-transformer';
import { IsArray, IsOptional, ValidateNested } from 'class-validator';

export class ImportDataDto {
  @IsOptional()
  @IsArray()
  @Type(() => CreateAccountDto)
  @ValidateNested({ each: true })
  accounts: CreateAccountDto[];

  @IsArray()
  @Type(() => CreateOrderDto)
  @ValidateNested({ each: true })
  activities: CreateOrderDto[];
}
