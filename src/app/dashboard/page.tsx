import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import React from "react";

async function DashboardPage() {
  //Get user and redirect depending on the role
  const user = await currentUser();

  // If user role is not defined or is "USER", redirect to the home page
  if (!user?.privateMetadata?.role || user?.privateMetadata.role === "USER") {
    redirect("/");
  }

  // If user role is "ADMIN", redirect to the admin dashboard
  if (user.privateMetadata.role === "ADMIN") {
    redirect("/dashboard/admin");
  }

  // If user role is "SELLER", redirect to the seller dashboard
  if (user.privateMetadata.role === "SELLER") {
    redirect("/dashboard/seller");
  }

  return <div>Dashboard Page</div>;
}

export default DashboardPage;
