'use client';

import { useActionState } from 'react';

import createUser from '@/actions/auth/signup/action';
import Form from '@/app/auth/(sign-up)/components/form';

/* eslint-disable @typescript-eslint/naming-convention */
const initialState = {
  message: '',
};

export default function SignUp() {
  const [state, formAction, pending] = useActionState(createUser, initialState);

  return <Form action={formAction} state={state} pending={pending} />;
}
