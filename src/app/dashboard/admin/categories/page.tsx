import { getAllCategories } from "@/queries/category";
import React from "react";

// Data table
import DataTable from "@/components/ui/data-table";
import { Plus } from "lucide-react";
import CategoryDetails from "@/components/dashboard/forms/category-details";
import { columns } from "./columns";
async function AdminCategoriesPage() {
  //Fetching stores data from the databases
  const categories = await getAllCategories();

  // Checking if no categories are found
  if (!categories) return null; // If no categories found, return null

  return (
    <DataTable
      heading="Abhilash"
      subheading="Abhilash subheading"
      actionButtonText={
        <>
          <Plus size={15} />
          Create category
        </>
      }
      modalChildren={<CategoryDetails />}
      newTabLink="/dashboard/admin/categories/new"
      filterValue="name"
      data={categories}
      searchPlaceholder="Search category name..."
      columns={columns}
    />
  );
}

export default AdminCategoriesPage;
