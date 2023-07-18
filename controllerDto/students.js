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
import { IsDefined, MaxLength, IsEnum, IsEmail, IsString, IsInt, Matches } from "class-validator";
var Gender;
(function (Gender) {
    Gender["Male"] = "Male";
    Gender["Female"] = "Female";
    Gender["Other"] = "Other";
})(Gender || (Gender = {}));
export class students {
    constructor(student_id, student_name, student_class_id, student_age, student_gender, student_phone, student_email, student_address) {
        this.student_id = student_id;
        this.student_name = student_name;
        this.student_class_id = student_class_id;
        this.student_age = student_age;
        this.student_gender = student_gender;
        this.student_phone = student_phone;
        this.student_email = student_email;
        this.student_address = student_address;
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
    Expose({ name: 'class_id' }),
    IsDefined({ message: () => { throw { status: 401, message: '¡ERROR! The "Class_Id" parameter is required >:(' }; } }),
    IsInt({ message: () => { throw { status: 401, message: '¡ERROR! The "Class_Id" parameter does not comply with the established data type >:(' }; } }),
    Type(() => Number),
    __metadata("design:type", Number)
], students.prototype, "student_class_id", void 0);
__decorate([
    Expose({ name: 'phone' }),
    IsDefined({ message: () => { throw { status: 401, message: '¡ERROR! The "Phone" parameter is required >:(' }; } }),
    IsString({ message: () => { throw { status: 401, message: '¡ERROR! The "Phone" parameter does not comply with the established data type >:(' }; } }),
    MaxLength(15, { message: () => { throw { status: 401, message: '¡ERROR! The "Phone" parameter has exceeded the limit of characters >:(' }; } }),
    Type(() => String),
    __metadata("design:type", String)
], students.prototype, "student_phone", void 0);
__decorate([
    Expose({ name: 'age' }),
    IsDefined({ message: () => { throw { status: 401, message: '¡ERROR! The "Age" parameter is required >:(' }; } }),
    IsInt({ message: () => { throw { status: 401, message: '¡ERROR! The "Age" parameter does not comply with the established data type >:(' }; } }),
    Type(() => Number),
    __metadata("design:type", Number)
], students.prototype, "student_age", void 0);
__decorate([
    Expose({ name: 'gender' }),
    IsEnum(Gender, { message: () => { throw { status: 401, message: '¡ERROR! The "Gender" parameter does not comply with the established data type >:(' }; } }),
    Type(() => String),
    __metadata("design:type", String)
], students.prototype, "student_gender", void 0);
__decorate([
    Expose({ name: 'email' }),
    IsEmail({}, { message: () => { throw { status: 401, message: '¡ERROR! The "Email" parameter does not comply with the established data type >:(' }; } }),
    Type(() => String),
    __metadata("design:type", String)
], students.prototype, "student_email", void 0);
__decorate([
    Expose({ name: 'address' }),
    IsDefined({ message: () => { throw { status: 401, message: '¡ERROR! The "Address" parameter is required >:(' }; } }),
    IsString({ message: () => { throw { status: 401, message: '¡ERROR! The "Address" parameter does not comply with the established data type >:(' }; } }),
    MaxLength(250, { message: () => { throw { status: 401, message: '¡ERROR! The "Address" parameter has exceeded the limit of characters >:(' }; } }),
    Matches(/^[A-Za-z0-9\s#\-.,]+$/, { message: () => { throw { status: 401, message: '¡ERROR! The "Address" parameter contains invalid characters >:(' }; } }),
    Type(() => String),
    __metadata("design:type", String)
], students.prototype, "student_address", void 0);
