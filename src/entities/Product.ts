import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nombre!: string;

  @Column()
  descripcion!: string;

  @Column()
  precio!: number;

  @Column()
  categoria!: string;

  @Column()
  fabricante!: string;

  @Column()
  cantidadEnExistencia!: number;

  @Column()
  unidadDeMedida!: string;

  @CreateDateColumn()
  fechaCreacion!: Date;

  @Column()
  usuarioCreacion!: string;

  @UpdateDateColumn()
  fechaActualizacion!: Date;

  @Column()
  usuarioActualizacion!: string;

  @Column()
  activo!: boolean;

  // Agregar dos campos adicionales
  @Column()
  campoAdicional1!: string;

  @Column()
  campoAdicional2!: string;
}
