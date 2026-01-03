"use client";

import AuthForm from "@/components/forms/AuthForm";
import { SignUpSchema } from "@/lib/validation";

function SignUp() {
  return (
    <AuthForm
      formType="signUp"
      schema={SignUpSchema}
      defaultValues={{ email: "", password: "", username: "", name: "" }}
      onSubmit={(data) => Promise.resolve({ success: true, data })}
    />
  );
}

export default SignUp;
