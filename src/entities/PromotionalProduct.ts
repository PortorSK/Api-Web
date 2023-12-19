// promotionalProduct.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('PromotionalProducts')
export class PromotionalProduct {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  nombre!: string;

  @Column({ type: 'text', nullable: true })
  descripcion!: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  precioEnPromocion!: number;

  @Column({ type: 'date', nullable: true })
  fechaInicioPromocion!: Date;

  @Column({ type: 'date', nullable: true })
  fechaFinPromocion!: Date;

  @Column({ type: 'boolean', default: true })
  activo!: boolean;

  @Column({ type: 'varchar', length: 255, nullable: false })
  formadepago!: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  modalidaddepago!: string;
}
