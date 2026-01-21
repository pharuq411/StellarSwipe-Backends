import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('risk_settings')
export class RiskSettings {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'uuid' })
  userId!: string;

  @Column({ default: 10 })
  maxOpenPositions!: number;

  @Column({ type: 'decimal', precision: 5, scale: 2, default: 50.0 })
  maxExposurePercentage!: number;

  @Column({ default: true })
  requireStopLoss!: boolean;

  @Column({ type: 'decimal', precision: 5, scale: 2, default: 5.0 })
  minStopLossPercentage!: number;

  @Column({ type: 'decimal', precision: 5, scale: 2, default: 20.0 })
  maxStopLossPercentage!: number;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
