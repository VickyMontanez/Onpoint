import { Expose, Type} from 'class-transformer';
import { IsDefined, MaxLength, IsEnum, IsEmail, IsString, IsInt, Matches} from "class-validator";

enum Gender {
    Male = 'Male',
    Female = 'Female',
    Other = 'Other',
}
  
export class teachers {

    @Expose({ name: 'id' })
    @IsDefined({message: ()=>{throw {status: 401, message: '¡ERROR! The "Id" parameter is required >:('}}})
    @IsInt({message: ()=>{throw {status:401, message: '¡ERROR! The "Id" parameter does not comply with the established data type >:('}}})
    @Type(()=>Number)
    teacher_id: number;

    @Expose({ name: 'name' })
    @IsDefined({message: ()=>{throw {status:401, message:'¡ERROR! The "Name" parameter is required >:('}}})
    @IsString({message: ()=>{throw {status:401, message: '¡ERROR! The "Name" parameter does not comply with the established data type >:('}}})
    @MaxLength(50,{message: ()=>{throw {status:401, message:'¡ERROR! The "Name" parameter has exceeded the limit of characters >:('}}})
    @Matches(/^[A-Za-zñÑáéíóúÁÉÍÓÚ\s]+$/, {message: ()=>{throw{status:401, message:'¡ERROR! The "Name" parameter contains invalid characters >:('}}})
    @Type(()=>String)
    teacher_name : string;

    @Expose({ name: 'specialty' })
    @IsDefined({message: ()=>{throw {status:401, message:'¡ERROR! The "Specialty" parameter is required >:('}}})
    @IsString({message: ()=>{throw {status:401, message: '¡ERROR! The "Specialty" parameter does not comply with the established data type >:('}}})
    @MaxLength(50,{message: ()=>{throw {status:401, message:'¡ERROR! The "Specialty" parameter has exceeded the limit of characters >:('}}})
    @Matches(/^[A-Za-zñÑáéíóúÁÉÍÓÚ\s]+$/, {message: ()=>{throw{status:401, message:'¡ERROR! The "Specialty" parameter contains invalid characters >:('}}})
    @Type(()=>String)
    teacher_specialty : string;

    @Expose({ name: 'phone' })
    @IsDefined({message: ()=>{throw {status: 401, message: '¡ERROR! The "Phone" parameter is required >:('}}})
    @IsString({message: ()=>{throw {status:401, message: '¡ERROR! The "Phone" parameter does not comply with the established data type >:('}}})
    @MaxLength(15,{message: ()=>{throw {status:401, message:'¡ERROR! The "Phone" parameter has exceeded the limit of characters >:('}}})
    @Type(()=>String)
    teacher_phone: string;

    @Expose({ name: 'age' })
    @IsDefined({message: ()=>{throw {status: 401, message: '¡ERROR! The "Age" parameter is required >:('}}})
    @IsInt({message: ()=>{throw {status:401, message: '¡ERROR! The "Age" parameter does not comply with the established data type >:('}}})
    @Type(()=>Number)
    teacher_age: number;

    @Expose({ name: 'gender' })
    @IsEnum(Gender, { message: ()=>{throw {status:401, message:'¡ERROR! The "Gender" parameter does not comply with the established data type >:('}}})
    @Type(()=>String)
    teacher_gender: string;

    @Expose({ name: 'email' })
    @IsEmail({}, { message: ()=>{throw {status:401, message:'¡ERROR! The "Email" parameter does not comply with the established data type >:('}}})
    @Type(()=>String)
    teacher_email: string;

    @Expose({ name: 'address' })
    @IsDefined({message: ()=>{throw {status:401, message:'¡ERROR! The "Address" parameter is required >:('}}})
    @IsString({message: ()=>{throw {status:401, message: '¡ERROR! The "Address" parameter does not comply with the established data type >:('}}})
    @MaxLength(250,{message: ()=>{throw {status:401, message:'¡ERROR! The "Address" parameter has exceeded the limit of characters >:('}}})
    @Matches(/^[A-Za-z0-9\s#\-.,]+$/, {message: ()=>{throw{status:401, message:'¡ERROR! The "Address" parameter contains invalid characters >:('}}})
    @Type(()=>String)
    teacher_address : string;

    constructor(
        teacher_id: number,
        teacher_name: string,
        teacher_specialty: string,
        teacher_phone: string,
        teacher_age: number,
        teacher_gender: string,
        teacher_email: string,
        teacher_address : string
    ) {
        this.teacher_id = teacher_id;
        this.teacher_name = teacher_name;
        this.teacher_specialty = teacher_specialty;
        this.teacher_phone = teacher_phone;
        this.teacher_age = teacher_age;
        this.teacher_gender = teacher_gender;
        this.teacher_email = teacher_email;
        this.teacher_address = teacher_address;
    }

}