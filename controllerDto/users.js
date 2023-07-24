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
export class users {
    constructor(user_id, user_name, user_gender, user_age, user_address, user_phone, user_phone_type, user_email, user_email_type, user_roll_id) {
        this.user_id = user_id;
        this.user_name = user_name;
        this.user_gender = user_gender;
        this.user_age = user_age;
        this.user_address = user_address;
        this.user_phone = user_phone;
        this.user_phone_type = user_phone_type;
        this.user_email = user_email;
        this.user_email_type = user_email_type;
        this.user_roll_id = user_roll_id;
    }
}
__decorate([
    Expose({ name: 'id' }),
    IsDefined({ message: () => { throw { status: 401, message: '¡ERROR! The "Id" parameter is required >:(' }; } }),
    IsInt({ message: () => { throw { status: 401, message: '¡ERROR! The "Id" parameter does not comply with the established data type >:(' }; } }),
    Type(() => Number),
    __metadata("design:type", Number)
], users.prototype, "user_id", void 0);
__decorate([
    Expose({ name: 'name' }),
    IsDefined({ message: () => { throw { status: 401, message: '¡ERROR! The "Name" parameter is required >:(' }; } }),
    IsString({ message: () => { throw { status: 401, message: '¡ERROR! The "Name" parameter does not comply with the established data type >:(' }; } }),
    MaxLength(50, { message: () => { throw { status: 401, message: '¡ERROR! The "Name" parameter has exceeded the limit of characters >:(' }; } }),
    Matches(/^[A-Za-zñÑáéíóúÁÉÍÓÚ\s]+$/, { message: () => { throw { status: 401, message: '¡ERROR! The "Name" parameter contains invalid characters >:(' }; } }),
    Type(() => String),
    __metadata("design:type", String)
], users.prototype, "user_name", void 0);
__decorate([
    Expose({ name: 'gender' }),
    IsDefined({ message: () => { throw { status: 401, message: '¡ERROR! The "Gender" parameter is required >:(' }; } }),
    IsInt({ message: () => { throw { status: 401, message: '¡ERROR! The "Gender" parameter does not comply with the established data type >:(' }; } }),
    Type(() => Number),
    __metadata("design:type", Number)
], users.prototype, "user_gender", void 0);
__decorate([
    Expose({ name: 'age' }),
    IsDefined({ message: () => { throw { status: 401, message: '¡ERROR! The "Age" parameter is required >:(' }; } }),
    IsInt({ message: () => { throw { status: 401, message: '¡ERROR! The "Age" parameter does not comply with the established data type >:(' }; } }),
    Type(() => Number),
    __metadata("design:type", Number)
], users.prototype, "user_age", void 0);
__decorate([
    Expose({ name: 'address' }),
    IsDefined({ message: () => { throw { status: 401, message: '¡ERROR! The "Address" parameter is required >:(' }; } }),
    IsString({ message: () => { throw { status: 401, message: '¡ERROR! The "Address" parameter does not comply with the established data type >:(' }; } }),
    MaxLength(250, { message: () => { throw { status: 401, message: '¡ERROR! The "Address" parameter has exceeded the limit of characters >:(' }; } }),
    Matches(/^[A-Za-z0-9\s#\-.,]+$/, { message: () => { throw { status: 401, message: '¡ERROR! The "Address" parameter contains invalid characters >:(' }; } }),
    Type(() => String),
    __metadata("design:type", String)
], users.prototype, "user_address", void 0);
__decorate([
    Expose({ name: 'phone' }),
    IsDefined({ message: () => { throw { status: 401, message: '¡ERROR! The "Phone" parameter is required >:(' }; } }),
    IsString({ message: () => { throw { status: 401, message: '¡ERROR! The "Phone" parameter does not comply with the established data type >:(' }; } }),
    MaxLength(15, { message: () => { throw { status: 401, message: '¡ERROR! The "Phone" parameter has exceeded the limit of characters >:(' }; } }),
    Type(() => String),
    __metadata("design:type", String)
], users.prototype, "user_phone", void 0);
__decorate([
    Expose({ name: 'phone_type' }),
    IsDefined({ message: () => { throw { status: 401, message: '¡ERROR! The "Phone_Type" parameter is required >:(' }; } }),
    IsString({ message: () => { throw { status: 401, message: '¡ERROR! The "Phone_Type" parameter does not comply with the established data type >:(' }; } }),
    MaxLength(15, { message: () => { throw { status: 401, message: '¡ERROR! The "Phone_Type" parameter has exceeded the limit of characters >:(' }; } }),
    Type(() => String),
    __metadata("design:type", String)
], users.prototype, "user_phone_type", void 0);
__decorate([
    Expose({ name: 'email' }),
    IsEmail({}, { message: () => { throw { status: 401, message: '¡ERROR! The "Email" parameter does not comply with the established data type >:(' }; } }),
    Type(() => String),
    __metadata("design:type", String)
], users.prototype, "user_email", void 0);
__decorate([
    Expose({ name: 'email_type' }),
    IsDefined({ message: () => { throw { status: 401, message: '¡ERROR! The "Email_Type" parameter is required >:(' }; } }),
    IsString({ message: () => { throw { status: 401, message: '¡ERROR! The "Email_Type" parameter does not comply with the established data type >:(' }; } }),
    MaxLength(15, { message: () => { throw { status: 401, message: '¡ERROR! The "Email_Type" parameter has exceeded the limit of characters >:(' }; } }),
    Type(() => String),
    __metadata("design:type", String)
], users.prototype, "user_email_type", void 0);
__decorate([
    Expose({ name: 'roll_id' }),
    IsDefined({ message: () => { throw { status: 401, message: '¡ERROR! The "Roll_Id" parameter is required >:(' }; } }),
    IsInt({ message: () => { throw { status: 401, message: '¡ERROR! The "Roll_Id" parameter does not comply with the established data type >:(' }; } }),
    Type(() => Number),
    __metadata("design:type", Number)
], users.prototype, "user_roll_id", void 0);
