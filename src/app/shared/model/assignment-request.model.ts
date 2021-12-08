import { BadgeModel } from "./badge-model";

export class AssignmentRequest{
    id: string;
    status: string;
    badge: BadgeModel;
    userId: string;
    userName: string;
    requestDate: Date;
}