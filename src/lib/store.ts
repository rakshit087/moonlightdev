import { writable, type Writable } from "svelte/store";

export enum UserType {
    DEVELOPER,
    ORGANIZATION
}

export const userType: Writable<UserType> = writable(UserType.DEVELOPER);