import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nombre!: string;

  @Column()
  correoElectronico!: string;

  @Column()
  contraseña!: string;

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
