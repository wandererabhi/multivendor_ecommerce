import { SignUp } from "@clerk/nextjs";
import React from "react";

function SignUpPage() {
  return (
    <div className="h-screen w-full place-content-center grid">
      <SignUp />
    </div>
  );
}

export default SignUpPage;
