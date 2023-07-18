import { Expose, Type, Transform} from 'class-transformer';
import { IsDefined, MaxLength, IsString, IsInt, Matches} from "class-validator";
  
export class bonusPoints {

    @Expose({ name: 'id' })
    @IsDefined({message: ()=>{throw {status: 401, message: '¡ERROR! The "Id" parameter is required >:('}}})
    @IsInt({message: ()=>{throw {status:401, message: '¡ERROR! The "Id" parameter does not comply with the established data type >:('}}})
    @Type(()=>Number)
    bp_id: number;

    @Expose({ name: 'amount' })
    @IsDefined({message: ()=>{throw {status: 401, message: '¡ERROR! The "Amount" parameter is required >:('}}})
    @IsInt({message: ()=>{throw {status:401, message: '¡ERROR! The "Amount" parameter does not comply with the established data type >:('}}})
    @Type(()=>Number)
    bp_amount: number;

    @Expose({ name: 'comments' })
    @IsDefined({message: ()=>{throw {status:401, message:'¡ERROR! The "Comments" parameter is required >:('}}})
    @IsString({message: ()=>{throw {status:401, message: '¡ERROR! The "Comments" parameter does not comply with the established data type >:('}}})
    @MaxLength(250,{message: ()=>{throw {status:401, message:'¡ERROR! The "Comments" parameter has exceeded the limit of characters >:('}}})
    @Matches(/^[A-Za-záéíóúÁÉÍÓÚ\s.,?!¡¿:;'"(){}[\]<>]+$/u, {message: ()=>{throw{status:401, message:'¡ERROR! The "Comments" parameter contains invalid characters >:('}}})
    @Type(()=>String)
    bp_comments : string;

    @Expose({ name: 'student_id' })
    @IsDefined({message: ()=>{throw {status: 401, message: '¡ERROR! The "Student_Id" parameter is required >:('}}})
    @IsInt({message: ()=>{throw {status:401, message: '¡ERROR! The "Student_Id" parameter does not comply with the established data type >:('}}})
    @Type(()=>Number)
    bp_student_id : number;

    @Expose({ name: 'created_by' })
    @IsDefined({message: ()=>{throw {status: 401, message: '¡ERROR! The "CreatedBy" parameter is required >:('}}})
    @IsInt({message: ()=>{throw {status:401, message: '¡ERROR! The "CreatedBy" parameter does not comply with the established data type >:('}}})
    @Type(()=>Number)
    bp_created_by: number;

    @Expose({ name: 'created_at' })
    @Transform(({ value }) => new Date(value))
    @Type(() => Date)
    bp_created_at: Date;

    @Expose({ name: 'updated_by' })
    @IsDefined({message: ()=>{throw {status: 401, message: '¡ERROR! The "UpdatedBy" parameter is required >:('}}})
    @IsInt({message: ()=>{throw {status:401, message: '¡ERROR! The "UpdatedBy" parameter does not comply with the established data type >:('}}})
    @Type(()=>Number)
    bp_updated_by: number;

    @Expose({ name: 'updated_at' })
    @Transform(({ value }) => new Date(value))
    @Type(() => Date)
    bp_updated_at: Date;


    constructor(
        bp_id: number,
        bp_amount: number,
        bp_comments: string,
        bp_created_by: number,
        bp_created_at: Date,
        bp_updated_by: number,
        bp_updated_at: Date
    ) {
        this.bp_id = bp_id;
        this.bp_amount = bp_amount;
        this.bp_comments = bp_comments;
        this.bp_created_by = bp_created_by;
        this.bp_created_at = bp_created_at;
        this.bp_updated_by = bp_updated_by;
        this.bp_updated_at = bp_updated_at;
    }

}