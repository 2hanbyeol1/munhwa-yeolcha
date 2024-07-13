import EditProfileForm from "@/components/EditProfileForm";
import React from "react";
import { createClient } from "@supabase/supabase-js";

const Edit = () => {
  return (
    <div className="flex pt-[85px] h-[612px] w-[100%]">
      <EditProfileForm />
    </div>
  );
};

export default Edit;
