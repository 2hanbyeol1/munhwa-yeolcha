"use client";

import { createClient } from "@/supabase/client";
import React, { useState, useEffect } from "react";

const EditProfileForm: React.FC = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const supabase = createClient();

  const handleChangePassword = async () => {
    if (confirmPassword.length < 6) return alert("비밀번호는 6글자 이상이어야 합니다.");
    if (newPassword === confirmPassword) {
      const { error: updateError } = await supabase.auth.updateUser({ password: newPassword });
      if (!updateError) {
        alert("비밀번호 변경이 완료되었습니다.");
      } else {
        console.log(updateError.message);
      }
    } else {
      alert("비밀번호가 일치하는 지 다시 확인해주세요.");
    }
  };

  return (
    <form className="ml-8 mr-8 space-y-4">
      <div className="flex">
        <label className="bg-green text-white text-center py-2 px-2 w-36 h-9 text-sm rounded-l-md">새 비밀번호</label>
        <input
          type="password"
          name="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="block border border-gray-300 py-2 px-1 w-full h-9 rounded-r-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div className="flex">
        <label className="bg-green text-white text-center text-sm px-2 py-2 w-36 h-9 rounded-l-md">비밀번호 확인</label>
        <input
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="block border border-gray-300 py-2 px-1 w-full h-9 rounded-r-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div className="flex justify-end space-x-4 ">
        <button type="submit" onClick={handleChangePassword} className="bg-green text-white py-2 px-4 rounded-md">
          확인
        </button>
      </div>
    </form>
  );
};

export default EditProfileForm;
