import { ActivityField } from "./activity-field";
import { Gender } from "./gender";
import { Occupation } from "./occupation";
import { Role } from "./role";
export class User {
    userId: Number;
    active: Boolean;
    activityField: ActivityField[];
    city: String;
    birthday: Date;
    email: String;
    firstName: String;
    gender: Gender;
    lastName: String;
    occupation: Occupation[];
    phoneNumber: Number;
    picturePath: String;
    role: Role;
    username: String;
    verificationCode: String;
}