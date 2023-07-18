var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose, Type } from 'class-transformer';
import { IsDefined, MaxLength, IsEmail, IsString, IsInt, Matches } from "class-validator";
export class teachers {
    constructor(teacher_id, teacher_name, teacher_specialty, teacher_phone, teacher_age, teacher_address) {
        this.teacher_id = teacher_id;
        this.teacher_name = teacher_name;
        this.teacher_specialty = teacher_specialty;
        this.teacher_phone = teacher_phone;
        this.teacher_age = teacher_age;
        this.teacher_address = teacher_address;
    }
}
__decorate([
    Expose({ name: 'id' }),
    IsDefined({ message: () => { throw { status: 401, message: '¡ERROR! The "Id" parameter is required >:(' }; } }),
    IsInt({ message: () => { throw { status: 401, message: '¡ERROR! The "Id" parameter does not comply with the established data type >:(' }; } }),
    Type(() => Number),
    __metadata("design:type", Number)
], teachers.prototype, "teacher_id", void 0);
__decorate([
    Expose({ name: 'name' }),
    IsDefined({ message: () => { throw { status: 401, message: '¡ERROR! The "Name" parameter is required >:(' }; } }),
    IsString({ message: () => { throw { status: 401, message: '¡ERROR! The "Name" parameter does not comply with the established data type >:(' }; } }),
    MaxLength(50, { message: () => { throw { status: 401, message: '¡ERROR! The "Name" parameter has exceeded the limit of characters >:(' }; } }),
    Matches(/^[A-Za-zñÑáéíóúÁÉÍÓÚ\s]+$/, { message: () => { throw { status: 401, message: '¡ERROR! The "Name" parameter contains invalid characters >:(' }; } }),
    Type(() => String),
    __metadata("design:type", String)
], teachers.prototype, "teacher_name", void 0);
__decorate([
    Expose({ name: 'specialty' }),
    IsDefined({ message: () => { throw { status: 401, message: '¡ERROR! The "Specialty" parameter is required >:(' }; } }),
    IsString({ message: () => { throw { status: 401, message: '¡ERROR! The "Specialty" parameter does not comply with the established data type >:(' }; } }),
    MaxLength(50, { message: () => { throw { status: 401, message: '¡ERROR! The "Specialty" parameter has exceeded the limit of characters >:(' }; } }),
    Matches(/^[A-Za-zñÑáéíóúÁÉÍÓÚ\s]+$/, { message: () => { throw { status: 401, message: '¡ERROR! The "Specialty" parameter contains invalid characters >:(' }; } }),
    Type(() => String),
    __metadata("design:type", String)
], teachers.prototype, "teacher_specialty", void 0);
__decorate([
    Expose({ name: 'phone' }),
    IsDefined({ message: () => { throw { status: 401, message: '¡ERROR! The "Phone" parameter is required >:(' }; } }),
    IsString({ message: () => { throw { status: 401, message: '¡ERROR! The "Phone" parameter does not comply with the established data type >:(' }; } }),
    MaxLength(15, { message: () => { throw { status: 401, message: '¡ERROR! The "Phone" parameter has exceeded the limit of characters >:(' }; } }),
    Type(() => String),
    __metadata("design:type", String)
], teachers.prototype, "teacher_phone", void 0);
__decorate([
    Expose({ name: 'age' }),
    IsDefined({ message: () => { throw { status: 401, message: '¡ERROR! The "Age" parameter is required >:(' }; } }),
    IsInt({ message: () => { throw { status: 401, message: '¡ERROR! The "Age" parameter does not comply with the established data type >:(' }; } }),
    Type(() => Number),
    __metadata("design:type", Number)
], teachers.prototype, "teacher_age", void 0);
__decorate([
    Expose({ name: 'email' }),
    IsEmail({}, { message: () => { throw { status: 401, message: '¡ERROR! The "Age" parameter does not comply with the established data type >:(' }; } }),
    Type(() => String),
    __metadata("design:type", String)
], teachers.prototype, "teacher_email", void 0);
__decorate([
    Expose({ name: 'address' }),
    IsDefined({ message: () => { throw { status: 401, message: '¡ERROR! The "Address" parameter is required >:(' }; } }),
    IsString({ message: () => { throw { status: 401, message: '¡ERROR! The "Address" parameter does not comply with the established data type >:(' }; } }),
    MaxLength(250, { message: () => { throw { status: 401, message: '¡ERROR! The "Address" parameter has exceeded the limit of characters >:(' }; } }),
    Matches(/^[A-Za-zñÑáéíóúÁÉÍÓÚ\s]+$/, { message: () => { throw { status: 401, message: '¡ERROR! The "Address" parameter contains invalid characters >:(' }; } }),
    Type(() => String),
    __metadata("design:type", String)
], teachers.prototype, "teacher_address", void 0);
