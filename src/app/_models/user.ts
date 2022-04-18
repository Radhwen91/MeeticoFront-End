import { ActivityField } from "./activity-field";
import { Profession } from "./profession";

enum Gender { MALE, FEMALE }
enum Role { ADMIN, EMPLOYEE, ENTREPRENEUR }

export class User {
    active: boolean;
    activityFields: ActivityField[];
    address: string;
    birthday: Date;
    email: string;
    firstName: string;
    gender: Gender;
    lastName: string;
    password: string;
    phoneNumber: number;
    picturePath: string;
    professions: Profession[];
    requests: Request[];
    role: Role;
    userId: number;
    username: string;
    verificationCode: string;
}
