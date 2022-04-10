import { Status } from "./status";
import { User } from "./user";
export class Request {
	requestId: Number;
	converted: Boolean;
	email: String;
	firstName: String;
	gender: String;
	lastName: String;
	nic: String;
	sender: User;
	sendTime: Date;
	status: Status;
}