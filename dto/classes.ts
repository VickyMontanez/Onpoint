import { Expose, Type} from 'class-transformer';
import { IsDefined, MaxLength, IsString, IsInt, Matches} from "class-validator";
  
export class classes {

    @Expose({ name: 'id' })
    @IsDefined({message: ()=>{throw {status: 401, message: '¡ERROR! The "Id" parameter is required >:('}}})
    @IsInt({message: ()=>{throw {status:401, message: '¡ERROR! The "Id" parameter does not comply with the established data type >:('}}})
    @Type(()=>Number)
    class_id: number;

    @Expose({ name: 'name' })
    @IsDefined({message: ()=>{throw {status:401, message:'¡ERROR! The "Name" parameter is required >:('}}})
    @IsString({message: ()=>{throw {status:401, message: '¡ERROR! The "Name" parameter does not comply with the established data type >:('}}})
    @MaxLength(50,{message: ()=>{throw {status:401, message:'¡ERROR! The "Name" parameter has exceeded the limit of characters >:('}}})
    @Matches(/^[A-Za-zñÑáéíóúÁÉÍÓÚ\s]+$/, {message: ()=>{throw{status:401, message:'¡ERROR! The "Name" parameter contains invalid characters >:('}}})
    @Type(()=>String)
    class_name : string;

    @Expose({ name: 'teacher_id' })
    @IsDefined({message: ()=>{throw {status: 401, message: '¡ERROR! The "Teacher_Id" parameter is required >:('}}})
    @IsInt({message: ()=>{throw {status:401, message: '¡ERROR! The "Teacher_Id" parameter does not comply with the established data type >:('}}})
    @Type(()=>Number)
    class_teacher_id : number;


    constructor(
        class_id: number,
        class_name: string,
        class_teacher_id: number,
    ) {
        this.class_id = class_id;
        this.class_name = class_name;
        this.class_teacher_id = class_teacher_id;
    }

}