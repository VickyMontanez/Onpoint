import { Expose, Type} from 'class-transformer';
import { IsDefined, MaxLength, IsEmail, IsString, IsInt, Matches} from "class-validator";
  
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

    @Expose({ name: 'gender' })
    @IsDefined({message: ()=>{throw {status: 401, message: '¡ERROR! The "Gender" parameter is required >:('}}})
    @IsInt({message: ()=>{throw {status:401, message: '¡ERROR! The "Gender" parameter does not comply with the established data type >:('}}})
    @Type(()=>Number)
    student_gender: number;

    @Expose({ name: 'age' })
    @IsDefined({message: ()=>{throw {status: 401, message: '¡ERROR! The "Age" parameter is required >:('}}})
    @IsInt({message: ()=>{throw {status:401, message: '¡ERROR! The "Age" parameter does not comply with the established data type >:('}}})
    @Type(()=>Number)
    student_age: number;

    @Expose({ name: 'address' })
    @IsDefined({message: ()=>{throw {status:401, message:'¡ERROR! The "Address" parameter is required >:('}}})
    @IsString({message: ()=>{throw {status:401, message: '¡ERROR! The "Address" parameter does not comply with the established data type >:('}}})
    @MaxLength(250,{message: ()=>{throw {status:401, message:'¡ERROR! The "Address" parameter has exceeded the limit of characters >:('}}})
    @Matches(/^[A-Za-z0-9\s#\-.,]+$/, {message: ()=>{throw{status:401, message:'¡ERROR! The "Address" parameter contains invalid characters >:('}}})
    @Type(()=>String)
    student_address : string;

    @Expose({ name: 'phone' })
    @IsDefined({message: ()=>{throw {status: 401, message: '¡ERROR! The "Phone" parameter is required >:('}}})
    @IsString({message: ()=>{throw {status:401, message: '¡ERROR! The "Phone" parameter does not comply with the established data type >:('}}})
    @MaxLength(15,{message: ()=>{throw {status:401, message:'¡ERROR! The "Phone" parameter has exceeded the limit of characters >:('}}})
    @Type(()=>String)
    student_phone: string;

    @Expose({ name: 'phone_type' })
    @IsDefined({message: ()=>{throw {status: 401, message: '¡ERROR! The "Phone_Type" parameter is required >:('}}})
    @IsString({message: ()=>{throw {status:401, message: '¡ERROR! The "Phone_Type" parameter does not comply with the established data type >:('}}})
    @MaxLength(15,{message: ()=>{throw {status:401, message:'¡ERROR! The "Phone_Type" parameter has exceeded the limit of characters >:('}}})
    @Type(()=>String)
    student_phone_type: string;

    @Expose({ name: 'email' })
    @IsEmail({}, { message: ()=>{throw {status:401, message:'¡ERROR! The "Email" parameter does not comply with the established data type >:('}}})
    @Type(()=>String)
    student_email: string;

    @Expose({ name: 'email_type' })
    @IsDefined({message: ()=>{throw {status: 401, message: '¡ERROR! The "Email_Type" parameter is required >:('}}})
    @IsString({message: ()=>{throw {status:401, message: '¡ERROR! The "Email_Type" parameter does not comply with the established data type >:('}}})
    @MaxLength(15,{message: ()=>{throw {status:401, message:'¡ERROR! The "Email_Type" parameter has exceeded the limit of characters >:('}}})
    @Type(()=>String)
    student_email_type: string;

    @Expose({ name: 'class_id' })
    @IsDefined({message: ()=>{throw {status: 401, message: '¡ERROR! The "Class_Id" parameter is required >:('}}})
    @IsInt({message: ()=>{throw {status:401, message: '¡ERROR! The "Class_Id" parameter does not comply with the established data type >:('}}})
    @Type(()=>Number)
    student_class_id : number;

    @Expose({ name: 'roll_id' })
    @IsDefined({message: ()=>{throw {status: 401, message: '¡ERROR! The "Roll_Id" parameter is required >:('}}})
    @IsInt({message: ()=>{throw {status:401, message: '¡ERROR! The "Roll_Id" parameter does not comply with the established data type >:('}}})
    @Type(()=>Number)
    student_roll_id : number;

    constructor(
        student_id: number,
        student_name: string,
        student_gender: number,
        student_age: number,
        student_address : string,
        student_phone: string,
        student_phone_type : string,
        student_email: string,
        student_email_type: string,
        student_class_id: number,
        student_roll_id: number
    ) {
        this.student_id = student_id;
        this.student_name = student_name;
        this.student_gender = student_gender;
        this.student_age = student_age;
        this.student_address = student_address;
        this.student_phone = student_phone;
        this.student_phone_type = student_phone_type ;
        this.student_email = student_email;
        this.student_email_type = student_email_type;
        this.student_class_id = student_class_id;
        this.student_roll_id = student_roll_id;
    }

}