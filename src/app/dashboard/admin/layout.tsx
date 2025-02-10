//Header
import Header from "@/components/dashboard/header/header";
//Sidebar
import Sidebar from "@/components/dashboard/sidebar/sidebar";
//Clerk
import { currentUser } from "@clerk/nextjs/server";
//NEXT
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";

async function AdminDashboardLayout({ children }: { children: ReactNode }) {
  //Block non admins for accessing the admin dashboard
  const user = await currentUser();
  if (!user || user.privateMetadata.role !== "ADMIN") {
    redirect("/");
  }

  return (
    <div className="w-full h-full">
      {/*Sidebar */}
      <Sidebar isAdmin />
      <div className="ml-[300px]">
        {/* Header */}
        <Header />
        <div className="w-full mt-[75px] p-4">{children}</div>
      </div>
    </div>
  );
}

export default AdminDashboardLayout;
