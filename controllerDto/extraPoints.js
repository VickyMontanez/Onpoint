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
import { IsDefined, MaxLength, IsString, IsInt, Matches } from "class-validator";
export class extraPoints {
    constructor(ext_teacher_id, ext_type_id, ext_comments) {
        this.ext_teacher_id = ext_teacher_id;
        this.ext_type_id = ext_type_id;
        this.ext_comments = ext_comments;
    }
}
__decorate([
    Expose({ name: 'teacherId' }),
    IsDefined({ message: () => { throw { status: 401, message: '¡ERROR! The "Teacher Id" parameter is required >:(' }; } }),
    IsInt({ message: () => { throw { status: 401, message: '¡ERROR! The "Teacher Id" parameter does not comply with the established data type >:(' }; } }),
    Type(() => Number),
    __metadata("design:type", Number)
], extraPoints.prototype, "ext_teacher_id", void 0);
__decorate([
    Expose({ name: 'typeId' }),
    IsDefined({ message: () => { throw { status: 401, message: '¡ERROR! The "Type Id" parameter is required >:(' }; } }),
    IsInt({ message: () => { throw { status: 401, message: '¡ERROR! The "Type Id" parameter does not comply with the established data type >:(' }; } }),
    Type(() => Number),
    __metadata("design:type", Number)
], extraPoints.prototype, "ext_type_id", void 0);
__decorate([
    Expose({ name: 'comments' }),
    IsDefined({ message: () => { throw { status: 401, message: '¡ERROR! The "Comments" parameter is required >:(' }; } }),
    IsString({ message: () => { throw { status: 401, message: '¡ERROR! The "Comments" parameter does not comply with the established data type >:(' }; } }),
    MaxLength(250, { message: () => { throw { status: 401, message: '¡ERROR! The "Comments" parameter has exceeded the limit of characters >:(' }; } }),
    Matches(/^[A-Za-záéíóúÁÉÍÓÚ\s.,?!¡¿:;'"(){}[\]<>]+$/u, { message: () => { throw { status: 401, message: '¡ERROR! The "Comments" parameter contains invalid characters >:(' }; } }),
    Type(() => String),
    __metadata("design:type", String)
], extraPoints.prototype, "ext_comments", void 0);
