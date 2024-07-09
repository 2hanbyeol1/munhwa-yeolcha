import React from "react";
import Link from "next/link";
import EditProfileForm from "@/components/EditProfileForm";
import TicketList from "@/components/TicketList";

const Edit = () => {
  return (
    <div className="min-h-screen flex  items-center bg-beige">
      <div className="bg-beige p-6 rounded-md w-full flex">
        <TicketList />
        <EditProfileForm />
      </div>
    </div>
  );
};

export default Edit;
