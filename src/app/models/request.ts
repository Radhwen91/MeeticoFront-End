import { User } from "./user";

enum Status { UNSENT, DELIVERED, SEEN, APPROVED }

export class Request {
	email: string;
	firstName: string;
	gender: string;
	lastName: string;
	nic: number;
	phoneNumber: number;
	requestId: number;
	sendTime: Date;
	sender: User;
	status: Status;
}
