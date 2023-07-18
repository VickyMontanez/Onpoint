var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose, Type, Transform } from 'class-transformer';
import { IsDefined, MaxLength, IsString, IsInt, Matches } from "class-validator";
export class bonusPoints {
    constructor(bp_id, bp_amount, bp_comments, bp_created_by, bp_created_at, bp_updated_by, bp_updated_at) {
        this.bp_id = bp_id;
        this.bp_amount = bp_amount;
        this.bp_comments = bp_comments;
        this.bp_created_by = bp_created_by;
        this.bp_created_at = bp_created_at;
        this.bp_updated_by = bp_updated_by;
        this.bp_updated_at = bp_updated_at;
    }
}
__decorate([
    Expose({ name: 'id' }),
    IsDefined({ message: () => { throw { status: 401, message: '¡ERROR! The "Id" parameter is required >:(' }; } }),
    IsInt({ message: () => { throw { status: 401, message: '¡ERROR! The "Id" parameter does not comply with the established data type >:(' }; } }),
    Type(() => Number),
    __metadata("design:type", Number)
], bonusPoints.prototype, "bp_id", void 0);
__decorate([
    Expose({ name: 'amount' }),
    IsDefined({ message: () => { throw { status: 401, message: '¡ERROR! The "Amount" parameter is required >:(' }; } }),
    IsInt({ message: () => { throw { status: 401, message: '¡ERROR! The "Amount" parameter does not comply with the established data type >:(' }; } }),
    Type(() => Number),
    __metadata("design:type", Number)
], bonusPoints.prototype, "bp_amount", void 0);
__decorate([
    Expose({ name: 'comments' }),
    IsDefined({ message: () => { throw { status: 401, message: '¡ERROR! The "Comments" parameter is required >:(' }; } }),
    IsString({ message: () => { throw { status: 401, message: '¡ERROR! The "Comments" parameter does not comply with the established data type >:(' }; } }),
    MaxLength(250, { message: () => { throw { status: 401, message: '¡ERROR! The "Comments" parameter has exceeded the limit of characters >:(' }; } }),
    Matches(/^[A-Za-záéíóúÁÉÍÓÚ\s.,?!¡¿:;'"(){}[\]<>]+$/u, { message: () => { throw { status: 401, message: '¡ERROR! The "Comments" parameter contains invalid characters >:(' }; } }),
    Type(() => String),
    __metadata("design:type", String)
], bonusPoints.prototype, "bp_comments", void 0);
__decorate([
    Expose({ name: 'student_id' }),
    IsDefined({ message: () => { throw { status: 401, message: '¡ERROR! The "Student_Id" parameter is required >:(' }; } }),
    IsInt({ message: () => { throw { status: 401, message: '¡ERROR! The "Student_Id" parameter does not comply with the established data type >:(' }; } }),
    Type(() => Number),
    __metadata("design:type", Number)
], bonusPoints.prototype, "bp_student_id", void 0);
__decorate([
    Expose({ name: 'created_by' }),
    IsDefined({ message: () => { throw { status: 401, message: '¡ERROR! The "CreatedBy" parameter is required >:(' }; } }),
    IsInt({ message: () => { throw { status: 401, message: '¡ERROR! The "CreatedBy" parameter does not comply with the established data type >:(' }; } }),
    Type(() => Number),
    __metadata("design:type", Number)
], bonusPoints.prototype, "bp_created_by", void 0);
__decorate([
    Expose({ name: 'created_at' }),
    Transform(({ value }) => new Date(value)),
    Type(() => Date),
    __metadata("design:type", Date)
], bonusPoints.prototype, "bp_created_at", void 0);
__decorate([
    Expose({ name: 'updated_by' }),
    IsDefined({ message: () => { throw { status: 401, message: '¡ERROR! The "UpdatedBy" parameter is required >:(' }; } }),
    IsInt({ message: () => { throw { status: 401, message: '¡ERROR! The "UpdatedBy" parameter does not comply with the established data type >:(' }; } }),
    Type(() => Number),
    __metadata("design:type", Number)
], bonusPoints.prototype, "bp_updated_by", void 0);
__decorate([
    Expose({ name: 'updated_at' }),
    Transform(({ value }) => new Date(value)),
    Type(() => Date),
    __metadata("design:type", Date)
], bonusPoints.prototype, "bp_updated_at", void 0);
