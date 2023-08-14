import { prisma } from '$lib/server/prisma';
import type { Actions } from './$types';

export const actions: Actions = {
  addToWaitlist: async ({ request }) => {
    const { email, type } = Object.fromEntries(await request.formData()) as {
      email: string;
      type: string;
    };
    try {
      await prisma.WaitlistUser.create({
        data: {
          email,
          type
        }
      });
      return {
        status: 200,
        body: {
          message: 'Success'
        }
      };
    } catch (error) {
      console.error(error);
      return {
        status: 500,
        body: {
          message: "couldn't add to waitlist"
        }
      };
    }
  }
};
