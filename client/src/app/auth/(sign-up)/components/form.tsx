import React from 'react';

import { State } from '@/types/auth/signup/types';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface Props {
  state: State;
  pending: boolean;
  action: (
    prevState: State,
    formData: FormData,
  ) => Promise<string | undefined>;
}

function SignUpForm(props: Props) {
    return (
      <div className="flex flex-col h-screen justify-center items-center w-screen">
        <h1 className="text-center mb-4 text-2xl sm:text-3xl md:text-4xl font-mont font-[900]">Sign up for free</h1>
        <form action={props.action} className="w-full max-w-md space-y-4">
          <div className="flex justify-center">
            <div className="w-[90vw] max-w-[32rem]">
              <label htmlFor="email" className="block mb-1">Email:</label>
              <Input type="email" id="email" name="email" required className="w-full shadow-md" /> 
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-[90vw] max-w-[32rem]">
              <label htmlFor="password" className="block mb-1">Password:</label>
              <Input type="password" id="password" name="password" required className="w-full shadow-md" /> 
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-[90vw] max-w-[32rem]">
              <label htmlFor="role" className="block mb-1">Role:</label>
              <Select name="role" >
                <SelectTrigger className="w-full shadow-md"> 
                  <SelectValue placeholder="Role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="TEACHER">Teacher</SelectItem>
                  <SelectItem value="STUDENT">Student</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          {props.state.message ? (
            <div className="error-message text-center mt-2 text-red-500">{props.state.message}</div> 
          ) : ""}
          <div className="flex justify-center mt-4">
            <Button type="submit" disabled={props.pending} className="w-[90vw] max-w-[32rem] hover:bg-blue-900"> 
              Register
            </Button>
          </div>
        </form>
      </div>
    );
  }
  
  export default SignUpForm;