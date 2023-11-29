import { EmailValidator } from "@angular/forms";

export interface IUser{
    id?: number;
    name?: string,
    password?: string,
    email?: EmailValidator,
    role?: any  
  }

  export class User implements IUser {
    constructor(
        public id?: number,
        public name?: string,
        public password?: string,
        public email?: EmailValidator,
      public role?:any
    ) {}
  }