'use server';

import { redirect } from 'next/navigation';

import State from "@/app/auth/(sign-up)/types";
import { BASE_URL } from "@/config/connect";
import formDataToObject from "@/utils/forms/form-data-to-obj";

async function CREATE_USER(PREV_STATE: State, FORM_DATA: FormData) {
    const OBJ = formDataToObject(FORM_DATA);

    try {
        const RESPONSE = await fetch(`${BASE_URL}/auth/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(OBJ)
        });

        if (!RESPONSE.ok) {
            const DATA = await RESPONSE.json();

            if (DATA.message === 'Validation Error') {
                return { message: DATA.errors[0].message };
            } else {
                return { message: DATA.message };
            }
        }
    } catch (error) {
        return { message: 'An error occurred while creating the user.' };
    }

    redirect('/auth/signin');
}

export default CREATE_USER;