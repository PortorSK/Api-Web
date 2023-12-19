import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class products {
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
  unidadMedida!: string;

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

  @Column()
  dosis!: string;

  @Column()
  presentacion!: string;
}
