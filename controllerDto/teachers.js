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
    constructor(teacher_id, teacher_name, teacher_gender, teacher_age, teacher_address, teacher_phone, teacher_phone_type, teacher_email, teacher_email_type, teacher_specialty_id, teacher_class_id, teacher_roll_id) {
        this.teacher_id = teacher_id;
        this.teacher_name = teacher_name;
        this.teacher_gender = teacher_gender;
        this.teacher_age = teacher_age;
        this.teacher_address = teacher_address;
        this.teacher_phone = teacher_phone;
        this.teacher_phone_type = teacher_phone_type;
        this.teacher_email = teacher_email;
        this.teacher_email_type = teacher_email_type;
        this.teacher_specialty_id = teacher_specialty_id;
        this.teacher_class_id = teacher_class_id;
        this.teacher_roll_id = teacher_roll_id;
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
    Expose({ name: 'gender' }),
    IsDefined({ message: () => { throw { status: 401, message: '¡ERROR! The "Gender" parameter is required >:(' }; } }),
    IsInt({ message: () => { throw { status: 401, message: '¡ERROR! The "Gender" parameter does not comply with the established data type >:(' }; } }),
    Type(() => Number),
    __metadata("design:type", Number)
], teachers.prototype, "teacher_gender", void 0);
__decorate([
    Expose({ name: 'age' }),
    IsDefined({ message: () => { throw { status: 401, message: '¡ERROR! The "Age" parameter is required >:(' }; } }),
    IsInt({ message: () => { throw { status: 401, message: '¡ERROR! The "Age" parameter does not comply with the established data type >:(' }; } }),
    Type(() => Number),
    __metadata("design:type", Number)
], teachers.prototype, "teacher_age", void 0);
__decorate([
    Expose({ name: 'address' }),
    IsDefined({ message: () => { throw { status: 401, message: '¡ERROR! The "Address" parameter is required >:(' }; } }),
    IsString({ message: () => { throw { status: 401, message: '¡ERROR! The "Address" parameter does not comply with the established data type >:(' }; } }),
    MaxLength(250, { message: () => { throw { status: 401, message: '¡ERROR! The "Address" parameter has exceeded the limit of characters >:(' }; } }),
    Matches(/^[A-Za-z0-9\s#\-.,]+$/, { message: () => { throw { status: 401, message: '¡ERROR! The "Address" parameter contains invalid characters >:(' }; } }),
    Type(() => String),
    __metadata("design:type", String)
], teachers.prototype, "teacher_address", void 0);
__decorate([
    Expose({ name: 'phone' }),
    IsDefined({ message: () => { throw { status: 401, message: '¡ERROR! The "Phone" parameter is required >:(' }; } }),
    IsString({ message: () => { throw { status: 401, message: '¡ERROR! The "Phone" parameter does not comply with the established data type >:(' }; } }),
    MaxLength(15, { message: () => { throw { status: 401, message: '¡ERROR! The "Phone" parameter has exceeded the limit of characters >:(' }; } }),
    Type(() => String),
    __metadata("design:type", String)
], teachers.prototype, "teacher_phone", void 0);
__decorate([
    Expose({ name: 'phone_type' }),
    IsDefined({ message: () => { throw { status: 401, message: '¡ERROR! The "Phone_Type" parameter is required >:(' }; } }),
    IsString({ message: () => { throw { status: 401, message: '¡ERROR! The "Phone_Type" parameter does not comply with the established data type >:(' }; } }),
    MaxLength(15, { message: () => { throw { status: 401, message: '¡ERROR! The "Phone_Type" parameter has exceeded the limit of characters >:(' }; } }),
    Type(() => String),
    __metadata("design:type", String)
], teachers.prototype, "teacher_phone_type", void 0);
__decorate([
    Expose({ name: 'email' }),
    IsEmail({}, { message: () => { throw { status: 401, message: '¡ERROR! The "Email" parameter does not comply with the established data type >:(' }; } }),
    Type(() => String),
    __metadata("design:type", String)
], teachers.prototype, "teacher_email", void 0);
__decorate([
    Expose({ name: 'email_type' }),
    IsDefined({ message: () => { throw { status: 401, message: '¡ERROR! The "Email_Type" parameter is required >:(' }; } }),
    IsString({ message: () => { throw { status: 401, message: '¡ERROR! The "Email_Type" parameter does not comply with the established data type >:(' }; } }),
    MaxLength(15, { message: () => { throw { status: 401, message: '¡ERROR! The "Email_Type" parameter has exceeded the limit of characters >:(' }; } }),
    Type(() => String),
    __metadata("design:type", String)
], teachers.prototype, "teacher_email_type", void 0);
__decorate([
    Expose({ name: 'specialty_id' }),
    IsDefined({ message: () => { throw { status: 401, message: '¡ERROR! The "Age" parameter is required >:(' }; } }),
    IsInt({ message: () => { throw { status: 401, message: '¡ERROR! The "Age" parameter does not comply with the established data type >:(' }; } }),
    Type(() => Number),
    __metadata("design:type", Number)
], teachers.prototype, "teacher_specialty_id", void 0);
__decorate([
    Expose({ name: 'class_id' }),
    IsDefined({ message: () => { throw { status: 401, message: '¡ERROR! The "Age" parameter is required >:(' }; } }),
    IsInt({ message: () => { throw { status: 401, message: '¡ERROR! The "Age" parameter does not comply with the established data type >:(' }; } }),
    Type(() => Number),
    __metadata("design:type", Number)
], teachers.prototype, "teacher_class_id", void 0);
__decorate([
    Expose({ name: 'roll_id' }),
    IsDefined({ message: () => { throw { status: 401, message: '¡ERROR! The "Age" parameter is required >:(' }; } }),
    IsInt({ message: () => { throw { status: 401, message: '¡ERROR! The "Age" parameter does not comply with the established data type >:(' }; } }),
    Type(() => Number),
    __metadata("design:type", Number)
], teachers.prototype, "teacher_roll_id", void 0);
