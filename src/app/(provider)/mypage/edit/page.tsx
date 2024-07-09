import React from "react";
import Link from "next/link";
import EditProfileForm from "@/components/EditProfileForm";

const Edit = () => {
  // const userId = "12345"; // This would be dynamically fetched in a real application

  return (
    <div className="min-h-screen flex justify-center items-center bg-beige">
      <div className="bg-beige p-6 rounded-md w-full flex">
        <div className="flex flex-col items-center space-y-4">
          <nav className="flex flex-col space-y-4">
            <Link href="/reservations">
              <h5 className="bg-green text-white px-4 py-2 rounded-md">예약 내역</h5>
            </Link>
            <Link href="/edit-profile">
              <h5 className="bg-green text-white px-4 py-2 rounded-md">회원정보 수정</h5>
            </Link>
            <Link href="/delete-account">
              <h5 className="bg-green text-white px-4 py-2 rounded-md">회원 탈퇴</h5>
            </Link>
          </nav>
        </div>
        <EditProfileForm />
      </div>
    </div>
  );
};

export default Edit;
