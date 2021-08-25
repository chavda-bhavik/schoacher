import { Address, Subject } from "@/..";

export interface SchoolProfileType {
    id: number | string;
    since?: number;
    name: string;
    address?: Address;
    mobile1?: string | number;
    mobile2?: string | number;
    email?: string;
    subjects?: Subject[];
    about?: string;
}