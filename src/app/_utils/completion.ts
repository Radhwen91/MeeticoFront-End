import { ActivityField } from "../_models/activity-field";
import { Profession } from "../_models/profession";
import { User } from "../_models/user";

enum Gender { MALE, FEMALE }
enum Role { ADMIN, EMPLOYEE, ENTREPRENEUR }

export class Completion {
    activityFields: ActivityField[];
    address: string;
    birthday: Date;
    email: string;
    firstName: string;
    gender: Gender;
    lastName: string;
    phoneNumber: number;
    picture: string;
    professions: Profession[];
}
