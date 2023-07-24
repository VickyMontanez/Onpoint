import { Expose, Type} from 'class-transformer';
import { IsDefined, MaxLength, IsString, IsInt, Matches} from "class-validator";
  
export class extraPoints {

    @Expose({ name: 'teacherId' })
    @IsDefined({message: ()=>{throw {status: 401, message: '¡ERROR! The "Teacher Id" parameter is required >:('}}})
    @IsInt({message: ()=>{throw {status:401, message: '¡ERROR! The "Teacher Id" parameter does not comply with the established data type >:('}}})
    @Type(()=>Number)
    ext_teacher_id: number;

    @Expose({ name: 'typeId' })
    @IsDefined({message: ()=>{throw {status: 401, message: '¡ERROR! The "Type Id" parameter is required >:('}}})
    @IsInt({message: ()=>{throw {status:401, message: '¡ERROR! The "Type Id" parameter does not comply with the established data type >:('}}})
    @Type(()=>Number)
    ext_type_id: number;

    @Expose({ name: 'comments' })
    @IsDefined({message: ()=>{throw {status:401, message:'¡ERROR! The "Comments" parameter is required >:('}}})
    @IsString({message: ()=>{throw {status:401, message: '¡ERROR! The "Comments" parameter does not comply with the established data type >:('}}})
    @MaxLength(250,{message: ()=>{throw {status:401, message:'¡ERROR! The "Comments" parameter has exceeded the limit of characters >:('}}})
    @Matches(/^[A-Za-záéíóúÁÉÍÓÚ\s.,?!¡¿:;'"(){}[\]<>]+$/u, {message: ()=>{throw{status:401, message:'¡ERROR! The "Comments" parameter contains invalid characters >:('}}})
    @Type(()=>String)
    ext_comments : string;


    constructor(
        ext_teacher_id: number,
        ext_type_id: number,
        ext_comments: string
    ) {
        this.ext_teacher_id = ext_teacher_id;
        this.ext_type_id = ext_type_id;
        this.ext_comments = ext_comments;
    }

}