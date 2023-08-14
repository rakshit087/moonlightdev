import { UserType, userType } from "$lib/store";

export const swapUserType = () => {
    userType.update((prev) =>
      prev === UserType.DEVELOPER ? UserType.ORGANIZATION : UserType.DEVELOPER
    );
  };