import { SignIn } from "@clerk/nextjs";
import React from "react";

function SignInPage() {
  return (
    <div className="h-screen w-full place-content-center grid">
      <SignIn />
    </div>
  );
}

export default SignInPage;
