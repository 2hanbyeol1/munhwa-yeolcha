"use client";
import React, { useState, useEffect } from "react";
// import { fetchUserProfile, updateUserProfile } from "";

// interface ProfileFormProps {
//   userId: string;
// }

const EditProfileForm: React.FC = () => {
  // const [profile, setProfile] = useState({ name: "", password: "" });
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState<string | null>(null);

  // useEffect(() => {
  //   const getUserProfile = async () => {
  //     try {
  //       const userProfile = await fetchUserProfile(userId);
  //       setProfile(userProfile);
  //       setIsLoading(false);
  //     } catch (error) {
  //       setError("Failed to load user profile");
  //       setIsLoading(false);
  //     }
  //   };

  //   getUserProfile();
  // }, [userId]);

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setProfile((prevProfile) => ({ ...prevProfile, [name]: value }));
  // };
  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   try {
  //     await updateUserProfile(userId, profile);
  //     alert("Profile updated successfully");
  //   } catch (error) {
  //     setError("Failed to update profile");
  //   }
  // };

  // if (isLoading) return <p>Loading...</p>;
  // if (error) return <p>{error}</p>;

  return (
    <form className="ml-8 mr-8 space-y-4">
      <div className="flex">
        <label className="bg-green text-white text-center text-sm py-2 px-3 w-32 h-9 rounded-l-md">이름</label>
        <input
          type="text"
          name="name"
          className="block border border-gray-300 py-2 px-1 w-full h-9 rounded-r-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div className="flex">
        <label className="bg-green text-white text-center py-2 px-3 w-32 h-9 text-sm rounded-l-md">비밀번호</label>
        <input
          type="password"
          name="password"
          className="block border border-gray-300 py-2 px-1 w-full h-9 rounded-r-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div className="flex">
        <label className="bg-green text-white text-center text-xs py-2 px-3 w-32 h-9 rounded-l-md">비밀번호 확인</label>
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
