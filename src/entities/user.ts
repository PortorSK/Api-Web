import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class users {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ default: 'default_user' }) // O asignar el usuario que está creando el registro
  nombre!: string;

  @Column({ default: 'default_user' }) // O asignar el usuario que está creando el registro
  correoElectronico!: string;

  @Column({ default: 'default_user' }) // O asignar el usuario que está creando el registro
  contrasena!: string;

  @Column({ default: () => 'CURRENT_TIMESTAMP' }) // Puedes usar el valor por defecto que necesites
  fechaCreacion!: Date;

  @Column({ default: 'default_user' }) // O asignar el usuario que está creando el registro
  usuarioCreacion!: string;

  @Column({ nullable: true, default: null }) // Puedes usar el valor por defecto que necesites o null si es nullable
  fechaActualizacion!: Date;

  @Column({ nullable: true, default: null })
  usuarioActualizacion!: string;
  
  @Column({ nullable: true, default: null })
  activo!: boolean;

  @Column({ nullable: true, default: null })
  estadocivil!: string;

  @Column({ nullable: true, default: null })
  edad!: number;
}