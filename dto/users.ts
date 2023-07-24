import { Expose, Type} from 'class-transformer';
import { IsDefined, MaxLength, IsEmail, IsString, IsInt, Matches} from "class-validator";
  
export class users {

    @Expose({ name: 'id' })
    @IsDefined({message: ()=>{throw {status: 401, message: '¡ERROR! The "Id" parameter is required >:('}}})
    @IsInt({message: ()=>{throw {status:401, message: '¡ERROR! The "Id" parameter does not comply with the established data type >:('}}})
    @Type(()=>Number)
    user_id: number;

    @Expose({ name: 'name' })
    @IsDefined({message: ()=>{throw {status:401, message:'¡ERROR! The "Name" parameter is required >:('}}})
    @IsString({message: ()=>{throw {status:401, message: '¡ERROR! The "Name" parameter does not comply with the established data type >:('}}})
    @MaxLength(50,{message: ()=>{throw {status:401, message:'¡ERROR! The "Name" parameter has exceeded the limit of characters >:('}}})
    @Matches(/^[A-Za-zñÑáéíóúÁÉÍÓÚ\s]+$/, {message: ()=>{throw{status:401, message:'¡ERROR! The "Name" parameter contains invalid characters >:('}}})
    @Type(()=>String)
    user_name : string;

    @Expose({ name: 'gender' })
    @IsDefined({message: ()=>{throw {status: 401, message: '¡ERROR! The "Gender" parameter is required >:('}}})
    @IsInt({message: ()=>{throw {status:401, message: '¡ERROR! The "Gender" parameter does not comply with the established data type >:('}}})
    @Type(()=>Number)
    user_gender: number;

    @Expose({ name: 'age' })
    @IsDefined({message: ()=>{throw {status: 401, message: '¡ERROR! The "Age" parameter is required >:('}}})
    @IsInt({message: ()=>{throw {status:401, message: '¡ERROR! The "Age" parameter does not comply with the established data type >:('}}})
    @Type(()=>Number)
    user_age: number;

    @Expose({ name: 'address' })
    @IsDefined({message: ()=>{throw {status:401, message:'¡ERROR! The "Address" parameter is required >:('}}})
    @IsString({message: ()=>{throw {status:401, message: '¡ERROR! The "Address" parameter does not comply with the established data type >:('}}})
    @MaxLength(250,{message: ()=>{throw {status:401, message:'¡ERROR! The "Address" parameter has exceeded the limit of characters >:('}}})
    @Matches(/^[A-Za-z0-9\s#\-.,]+$/, {message: ()=>{throw{status:401, message:'¡ERROR! The "Address" parameter contains invalid characters >:('}}})
    @Type(()=>String)
    user_address : string;

    @Expose({ name: 'phone' })
    @IsDefined({message: ()=>{throw {status: 401, message: '¡ERROR! The "Phone" parameter is required >:('}}})
    @IsString({message: ()=>{throw {status:401, message: '¡ERROR! The "Phone" parameter does not comply with the established data type >:('}}})
    @MaxLength(15,{message: ()=>{throw {status:401, message:'¡ERROR! The "Phone" parameter has exceeded the limit of characters >:('}}})
    @Type(()=>String)
    user_phone: string;

    @Expose({ name: 'phone_type' })
    @IsDefined({message: ()=>{throw {status: 401, message: '¡ERROR! The "Phone_Type" parameter is required >:('}}})
    @IsString({message: ()=>{throw {status:401, message: '¡ERROR! The "Phone_Type" parameter does not comply with the established data type >:('}}})
    @MaxLength(15,{message: ()=>{throw {status:401, message:'¡ERROR! The "Phone_Type" parameter has exceeded the limit of characters >:('}}})
    @Type(()=>String)
    user_phone_type: string;

    @Expose({ name: 'email' })
    @IsEmail({}, { message: ()=>{throw {status:401, message:'¡ERROR! The "Email" parameter does not comply with the established data type >:('}}})
    @Type(()=>String)
    user_email: string;

    @Expose({ name: 'email_type' })
    @IsDefined({message: ()=>{throw {status: 401, message: '¡ERROR! The "Email_Type" parameter is required >:('}}})
    @IsString({message: ()=>{throw {status:401, message: '¡ERROR! The "Email_Type" parameter does not comply with the established data type >:('}}})
    @MaxLength(15,{message: ()=>{throw {status:401, message:'¡ERROR! The "Email_Type" parameter has exceeded the limit of characters >:('}}})
    @Type(()=>String)
    user_email_type: string;

    @Expose({ name: 'roll_id' })
    @IsDefined({message: ()=>{throw {status: 401, message: '¡ERROR! The "Roll_Id" parameter is required >:('}}})
    @IsInt({message: ()=>{throw {status:401, message: '¡ERROR! The "Roll_Id" parameter does not comply with the established data type >:('}}})
    @Type(()=>Number)
    user_roll_id : number;

    constructor(
        user_id: number,
        user_name: string,
        user_gender: number,
        user_age: number,
        user_address : string,
        user_phone: string,
        user_phone_type : string,
        user_email: string,
        user_email_type: string,
        user_roll_id: number
    ) {
        this.user_id = user_id;
        this.user_name = user_name;
        this.user_gender = user_gender;
        this.user_age = user_age;
        this.user_address = user_address;
        this.user_phone = user_phone;
        this.user_phone_type = user_phone_type ;
        this.user_email = user_email;
        this.user_email_type = user_email_type;
        this.user_roll_id = user_roll_id;
    }

}