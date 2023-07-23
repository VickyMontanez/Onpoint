import { Expose, Type} from 'class-transformer';
import { IsDefined, MaxLength, IsEmail, IsString, IsInt, Matches} from "class-validator";
  
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

    @Expose({ name: 'gender' })
    @IsDefined({message: ()=>{throw {status: 401, message: '¡ERROR! The "Gender" parameter is required >:('}}})
    @IsInt({message: ()=>{throw {status:401, message: '¡ERROR! The "Gender" parameter does not comply with the established data type >:('}}})
    @Type(()=>Number)
    teacher_gender: number;

    @Expose({ name: 'age' })
    @IsDefined({message: ()=>{throw {status: 401, message: '¡ERROR! The "Age" parameter is required >:('}}})
    @IsInt({message: ()=>{throw {status:401, message: '¡ERROR! The "Age" parameter does not comply with the established data type >:('}}})
    @Type(()=>Number)
    teacher_age: number;

    @Expose({ name: 'address' })
    @IsDefined({message: ()=>{throw {status:401, message:'¡ERROR! The "Address" parameter is required >:('}}})
    @IsString({message: ()=>{throw {status:401, message: '¡ERROR! The "Address" parameter does not comply with the established data type >:('}}})
    @MaxLength(250,{message: ()=>{throw {status:401, message:'¡ERROR! The "Address" parameter has exceeded the limit of characters >:('}}})
    @Matches(/^[A-Za-z0-9\s#\-.,]+$/, {message: ()=>{throw{status:401, message:'¡ERROR! The "Address" parameter contains invalid characters >:('}}})
    @Type(()=>String)
    teacher_address : string;

    @Expose({ name: 'phone' })
    @IsDefined({message: ()=>{throw {status: 401, message: '¡ERROR! The "Phone" parameter is required >:('}}})
    @IsString({message: ()=>{throw {status:401, message: '¡ERROR! The "Phone" parameter does not comply with the established data type >:('}}})
    @MaxLength(15,{message: ()=>{throw {status:401, message:'¡ERROR! The "Phone" parameter has exceeded the limit of characters >:('}}})
    @Type(()=>String)
    teacher_phone: string;

    @Expose({ name: 'phone_type' })
    @IsDefined({message: ()=>{throw {status: 401, message: '¡ERROR! The "Phone_Type" parameter is required >:('}}})
    @IsString({message: ()=>{throw {status:401, message: '¡ERROR! The "Phone_Type" parameter does not comply with the established data type >:('}}})
    @MaxLength(15,{message: ()=>{throw {status:401, message:'¡ERROR! The "Phone_Type" parameter has exceeded the limit of characters >:('}}})
    @Type(()=>String)
    teacher_phone_type: string;

    @Expose({ name: 'email' })
    @IsEmail({}, { message: ()=>{throw {status:401, message:'¡ERROR! The "Email" parameter does not comply with the established data type >:('}}})
    @Type(()=>String)
    teacher_email: string;

    @Expose({ name: 'email_type' })
    @IsDefined({message: ()=>{throw {status: 401, message: '¡ERROR! The "Email_Type" parameter is required >:('}}})
    @IsString({message: ()=>{throw {status:401, message: '¡ERROR! The "Email_Type" parameter does not comply with the established data type >:('}}})
    @MaxLength(15,{message: ()=>{throw {status:401, message:'¡ERROR! The "Email_Type" parameter has exceeded the limit of characters >:('}}})
    @Type(()=>String)
    teacher_email_type: string;

    @Expose({ name: 'specialty_id' })
    @IsDefined({message: ()=>{throw {status: 401, message: '¡ERROR! The "Age" parameter is required >:('}}})
    @IsInt({message: ()=>{throw {status:401, message: '¡ERROR! The "Age" parameter does not comply with the established data type >:('}}})
    @Type(()=>Number)
    teacher_specialty_id : number;

    @Expose({ name: 'class_id' })
    @IsDefined({message: ()=>{throw {status: 401, message: '¡ERROR! The "Age" parameter is required >:('}}})
    @IsInt({message: ()=>{throw {status:401, message: '¡ERROR! The "Age" parameter does not comply with the established data type >:('}}})
    @Type(()=>Number)
    teacher_class_id : number;

    @Expose({ name: 'roll_id' })
    @IsDefined({message: ()=>{throw {status: 401, message: '¡ERROR! The "Age" parameter is required >:('}}})
    @IsInt({message: ()=>{throw {status:401, message: '¡ERROR! The "Age" parameter does not comply with the established data type >:('}}})
    @Type(()=>Number)
    teacher_roll_id : number;

    constructor(
        teacher_id: number,
        teacher_name: string,
        teacher_gender: number,
        teacher_age: number,
        teacher_address : string,
        teacher_phone: string,
        teacher_phone_type : string,
        teacher_email: string,
        teacher_email_type: string,
        teacher_specialty_id: number,
        teacher_class_id: number,
        teacher_roll_id: number
    ) {
        this.teacher_id = teacher_id;
        this.teacher_name = teacher_name;
        this.teacher_gender = teacher_gender;
        this.teacher_age = teacher_age;
        this.teacher_address = teacher_address;
        this.teacher_phone = teacher_phone;
        this.teacher_phone_type = teacher_phone_type ;
        this.teacher_email = teacher_email;
        this.teacher_email_type = teacher_email_type;
        this.teacher_specialty_id = teacher_specialty_id;
        this.teacher_class_id = teacher_class_id;
        this.teacher_roll_id = teacher_roll_id;
    }

}