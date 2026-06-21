// export interface RegisterModel {
//   name: string;
//   email: string;
//   password: string;
//   agree: boolean;
// }

export class RegisterModel {
  constructor(
    public name: string,
    public email: string,
    public password: string,
    public agree: boolean,
  ) {}
}
