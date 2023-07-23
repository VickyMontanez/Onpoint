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
export class students {
    constructor(student_id, student_name, student_gender, student_age, student_address, student_phone, student_phone_type, student_email, student_email_type, student_class_id, student_roll_id) {
        this.student_id = student_id;
        this.student_name = student_name;
        this.student_gender = student_gender;
        this.student_age = student_age;
        this.student_address = student_address;
        this.student_phone = student_phone;
        this.student_phone_type = student_phone_type;
        this.student_email = student_email;
        this.student_email_type = student_email_type;
        this.student_class_id = student_class_id;
        this.student_roll_id = student_roll_id;
    }
}
__decorate([
    Expose({ name: 'id' }),
    IsDefined({ message: () => { throw { status: 401, message: '¡ERROR! The "Id" parameter is required >:(' }; } }),
    IsInt({ message: () => { throw { status: 401, message: '¡ERROR! The "Id" parameter does not comply with the established data type >:(' }; } }),
    Type(() => Number),
    __metadata("design:type", Number)
], students.prototype, "student_id", void 0);
__decorate([
    Expose({ name: 'name' }),
    IsDefined({ message: () => { throw { status: 401, message: '¡ERROR! The "Name" parameter is required >:(' }; } }),
    IsString({ message: () => { throw { status: 401, message: '¡ERROR! The "Name" parameter does not comply with the established data type >:(' }; } }),
    MaxLength(50, { message: () => { throw { status: 401, message: '¡ERROR! The "Name" parameter has exceeded the limit of characters >:(' }; } }),
    Matches(/^[A-Za-zñÑáéíóúÁÉÍÓÚ\s]+$/, { message: () => { throw { status: 401, message: '¡ERROR! The "Name" parameter contains invalid characters >:(' }; } }),
    Type(() => String),
    __metadata("design:type", String)
], students.prototype, "student_name", void 0);
__decorate([
    Expose({ name: 'gender' }),
    IsDefined({ message: () => { throw { status: 401, message: '¡ERROR! The "Gender" parameter is required >:(' }; } }),
    IsInt({ message: () => { throw { status: 401, message: '¡ERROR! The "Gender" parameter does not comply with the established data type >:(' }; } }),
    Type(() => Number),
    __metadata("design:type", Number)
], students.prototype, "student_gender", void 0);
__decorate([
    Expose({ name: 'age' }),
    IsDefined({ message: () => { throw { status: 401, message: '¡ERROR! The "Age" parameter is required >:(' }; } }),
    IsInt({ message: () => { throw { status: 401, message: '¡ERROR! The "Age" parameter does not comply with the established data type >:(' }; } }),
    Type(() => Number),
    __metadata("design:type", Number)
], students.prototype, "student_age", void 0);
__decorate([
    Expose({ name: 'address' }),
    IsDefined({ message: () => { throw { status: 401, message: '¡ERROR! The "Address" parameter is required >:(' }; } }),
    IsString({ message: () => { throw { status: 401, message: '¡ERROR! The "Address" parameter does not comply with the established data type >:(' }; } }),
    MaxLength(250, { message: () => { throw { status: 401, message: '¡ERROR! The "Address" parameter has exceeded the limit of characters >:(' }; } }),
    Matches(/^[A-Za-z0-9\s#\-.,]+$/, { message: () => { throw { status: 401, message: '¡ERROR! The "Address" parameter contains invalid characters >:(' }; } }),
    Type(() => String),
    __metadata("design:type", String)
], students.prototype, "student_address", void 0);
__decorate([
    Expose({ name: 'phone' }),
    IsDefined({ message: () => { throw { status: 401, message: '¡ERROR! The "Phone" parameter is required >:(' }; } }),
    IsString({ message: () => { throw { status: 401, message: '¡ERROR! The "Phone" parameter does not comply with the established data type >:(' }; } }),
    MaxLength(15, { message: () => { throw { status: 401, message: '¡ERROR! The "Phone" parameter has exceeded the limit of characters >:(' }; } }),
    Type(() => String),
    __metadata("design:type", String)
], students.prototype, "student_phone", void 0);
__decorate([
    Expose({ name: 'phone_type' }),
    IsDefined({ message: () => { throw { status: 401, message: '¡ERROR! The "Phone_Type" parameter is required >:(' }; } }),
    IsString({ message: () => { throw { status: 401, message: '¡ERROR! The "Phone_Type" parameter does not comply with the established data type >:(' }; } }),
    MaxLength(15, { message: () => { throw { status: 401, message: '¡ERROR! The "Phone_Type" parameter has exceeded the limit of characters >:(' }; } }),
    Type(() => String),
    __metadata("design:type", String)
], students.prototype, "student_phone_type", void 0);
__decorate([
    Expose({ name: 'email' }),
    IsEmail({}, { message: () => { throw { status: 401, message: '¡ERROR! The "Email" parameter does not comply with the established data type >:(' }; } }),
    Type(() => String),
    __metadata("design:type", String)
], students.prototype, "student_email", void 0);
__decorate([
    Expose({ name: 'email_type' }),
    IsDefined({ message: () => { throw { status: 401, message: '¡ERROR! The "Email_Type" parameter is required >:(' }; } }),
    IsString({ message: () => { throw { status: 401, message: '¡ERROR! The "Email_Type" parameter does not comply with the established data type >:(' }; } }),
    MaxLength(15, { message: () => { throw { status: 401, message: '¡ERROR! The "Email_Type" parameter has exceeded the limit of characters >:(' }; } }),
    Type(() => String),
    __metadata("design:type", String)
], students.prototype, "student_email_type", void 0);
__decorate([
    Expose({ name: 'class_id' }),
    IsDefined({ message: () => { throw { status: 401, message: '¡ERROR! The "Class_Id" parameter is required >:(' }; } }),
    IsInt({ message: () => { throw { status: 401, message: '¡ERROR! The "Class_Id" parameter does not comply with the established data type >:(' }; } }),
    Type(() => Number),
    __metadata("design:type", Number)
], students.prototype, "student_class_id", void 0);
__decorate([
    Expose({ name: 'roll_id' }),
    IsDefined({ message: () => { throw { status: 401, message: '¡ERROR! The "Roll_Id" parameter is required >:(' }; } }),
    IsInt({ message: () => { throw { status: 401, message: '¡ERROR! The "Roll_Id" parameter does not comply with the established data type >:(' }; } }),
    Type(() => Number),
    __metadata("design:type", Number)
], students.prototype, "student_roll_id", void 0);
