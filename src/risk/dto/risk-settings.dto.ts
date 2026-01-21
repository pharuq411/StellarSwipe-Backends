import { IsNumber, IsBoolean, IsOptional, Min, Max } from 'class-validator';

export class CreateRiskSettingsDto {
  @IsNumber()
  @Min(1)
  @Max(50)
  maxOpenPositions!: number;

  @IsNumber()
  @Min(1)
  @Max(100)
  maxExposurePercentage!: number;

  @IsBoolean()
  requireStopLoss!: boolean;

  @IsNumber()
  @Min(1)
  @Max(100)
  minStopLossPercentage!: number;

  @IsNumber()
  @Min(1)
  @Max(100)
  maxStopLossPercentage!: number;
}

export class UpdateRiskSettingsDto {
  @IsOptional()
  @IsNumber()
  @Min(1)
  @Max(50)
  maxOpenPositions?: number;

  @IsOptional()
  @IsNumber()
  @Min(1)
  @Max(100)
  maxExposurePercentage?: number;

  @IsOptional()
  @IsBoolean()
  requireStopLoss?: boolean;

  @IsOptional()
  @IsNumber()
  @Min(1)
  @Max(100)
  minStopLossPercentage?: number;

  @IsOptional()
  @IsNumber()
  @Min(1)
  @Max(100)
  maxStopLossPercentage?: number;
}
