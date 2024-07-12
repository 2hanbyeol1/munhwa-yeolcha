import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

const EditProfileForm: React.FC = () => {
  const ?? = useEffect(()=>{const ??? = async() => {await ;}})
  return (
    <form className="ml-8 mr-8 space-y-4">
      <div className="flex">
        <label className="bg-green text-white text-center py-2 px-3 w-32 h-9 text-sm rounded-l-md">비밀번호</label>
        <input
          type="password"
          name="password"
          className="block border border-gray-300 py-2 px-1 w-full h-9 rounded-r-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div className="flex">
        <label className="bg-green text-white text-center text-sm py-2.5 w-32 h-9 rounded-l-md">비밀번호 확인</label>
        <input
          type="password"
          name="confirmPassword"
          className="block border border-gray-300 py-2 px-1 w-full h-9 rounded-r-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div className="flex justify-end space-x-4 ">
        <button type="button" className="bg-green text-white py-2 px-4 rounded-md">
          취소
        </button>
        <button type="submit" className="bg-green text-white py-2 px-4 rounded-md">
          확인
        </button>
      </div>
    </form>
  );
};

export default EditProfileForm;
