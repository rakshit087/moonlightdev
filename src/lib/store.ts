import { writable, type Writable } from "svelte/store";

enum UserType {
    Developer,
    Organization
}

export const userType: Writable<UserType> = writable(UserType.Developer);