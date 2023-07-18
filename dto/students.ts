import { Expose, Type} from 'class-transformer';
import { IsDefined, MaxLength, IsEnum, IsEmail, IsString, IsInt, Matches} from "class-validator";

enum Gender {
    Male = 'Male',
    Female = 'Female',
    Other = 'Other',
}
  
export class students {

    @Expose({ name: 'id' })
    @IsDefined({message: ()=>{throw {status: 401, message: '¡ERROR! The "Id" parameter is required >:('}}})
    @IsInt({message: ()=>{throw {status:401, message: '¡ERROR! The "Id" parameter does not comply with the established data type >:('}}})
    @Type(()=>Number)
    student_id: number;

    @Expose({ name: 'name' })
    @IsDefined({message: ()=>{throw {status:401, message:'¡ERROR! The "Name" parameter is required >:('}}})
    @IsString({message: ()=>{throw {status:401, message: '¡ERROR! The "Name" parameter does not comply with the established data type >:('}}})
    @MaxLength(50,{message: ()=>{throw {status:401, message:'¡ERROR! The "Name" parameter has exceeded the limit of characters >:('}}})
    @Matches(/^[A-Za-zñÑáéíóúÁÉÍÓÚ\s]+$/, {message: ()=>{throw{status:401, message:'¡ERROR! The "Name" parameter contains invalid characters >:('}}})
    @Type(()=>String)
    student_name : string;

    @Expose({ name: 'class_id' })
    @IsDefined({message: ()=>{throw {status: 401, message: '¡ERROR! The "Class_Id" parameter is required >:('}}})
    @IsInt({message: ()=>{throw {status:401, message: '¡ERROR! The "Class_Id" parameter does not comply with the established data type >:('}}})
    @Type(()=>Number)
    student_class_id : number;

    @Expose({ name: 'phone' })
    @IsDefined({message: ()=>{throw {status: 401, message: '¡ERROR! The "Phone" parameter is required >:('}}})
    @IsString({message: ()=>{throw {status:401, message: '¡ERROR! The "Phone" parameter does not comply with the established data type >:('}}})
    @MaxLength(15,{message: ()=>{throw {status:401, message:'¡ERROR! The "Phone" parameter has exceeded the limit of characters >:('}}})
    @Type(()=>String)
    student_phone: string;

    @Expose({ name: 'age' })
    @IsDefined({message: ()=>{throw {status: 401, message: '¡ERROR! The "Age" parameter is required >:('}}})
    @IsInt({message: ()=>{throw {status:401, message: '¡ERROR! The "Age" parameter does not comply with the established data type >:('}}})
    @Type(()=>Number)
    student_age: number;

    @Expose({ name: 'gender' })
    @IsEnum(Gender, { message: ()=>{throw {status:401, message:'¡ERROR! The "Gender" parameter does not comply with the established data type >:('}}})
    @Type(()=>String)
    student_gender: string;

    @Expose({ name: 'email' })
    @IsEmail({}, { message: ()=>{throw {status:401, message:'¡ERROR! The "Email" parameter does not comply with the established data type >:('}}})
    @Type(()=>String)
    student_email: string;

    @Expose({ name: 'address' })
    @IsDefined({message: ()=>{throw {status:401, message:'¡ERROR! The "Address" parameter is required >:('}}})
    @IsString({message: ()=>{throw {status:401, message: '¡ERROR! The "Address" parameter does not comply with the established data type >:('}}})
    @MaxLength(250,{message: ()=>{throw {status:401, message:'¡ERROR! The "Address" parameter has exceeded the limit of characters >:('}}})
    @Matches(/^[A-Za-z0-9\s#\-.,]+$/, {message: ()=>{throw{status:401, message:'¡ERROR! The "Address" parameter contains invalid characters >:('}}})
    @Type(()=>String)
    student_address : string;

    constructor(
        student_id: number,
        student_name: string,
        student_class_id: number,
        student_age: number,
        student_gender: string,
        student_phone: string,
        student_email: string,
        student_address : string
    ) {
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