import { prisma } from '$lib/server/prisma';
import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
  addToWaitlist: async ({ request }) => {
    const { email, type } = Object.fromEntries(await request.formData()) as {
      email: string;
      type: string;
    };

    if (!email) {
      return fail(400, { email, missing: true });
    }

    if (!type) {
      return fail(400, { type, missing: true });
    }

    if (!email.includes('@') || !email.includes('.')) {
      return fail(400, { email, invalid: true });
    }

    try {
      await prisma.WaitlistUser.create({
        data: {
          email,
          type
        }
      });
      return { success: true };
    } catch (error) {
      return { success: false };
    }
  }
};
