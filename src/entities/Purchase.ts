// Purchase.ts
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'Purchases' })
export class Purchase {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'text', nullable: true })
  descripcion!: string;

  @Column({ name: 'nombreCliente', type: 'varchar', length: 255 })
  nombreCliente!: string;

  @Column({ name: 'precioTotal', type: 'decimal', precision: 10, scale: 2 })
  precioTotal!: number;

  @Column({ name: 'totalProductos', type: 'int' })
  totalProductos!: number;

  @CreateDateColumn({ name: 'fechaCreacion', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fechaCreacion!: Date;

  @Column({ name: 'usuarioCreacion', type: 'varchar', length: 255 })
  usuarioCreacion!: string;

  @UpdateDateColumn({ name: 'fechaActualizacion', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fechaActualizacion!: Date;

  @Column({ name: 'usuarioActualizacion', type: 'varchar', length: 255 })
  usuarioActualizacion!: string;

  @Column({ type: 'boolean' })
  activo!: boolean;
}
