import EditProfileForm from "@/components/EditProfileForm";
import { createClient } from "@/supabase/server";
import React from "react";

const supabase = createClient(NEXT_PUBLIC_SUPABASE_URL, SUPABASE_ANON_KEY);

const Edit = () => {
  return (
    <div className="flex items-center h-[612px] w-[100%]">
      <EditProfileForm />
    </div>
  );
};

export default Edit;
