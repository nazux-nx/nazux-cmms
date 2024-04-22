"use client";
import React from "react";
import { useRouter } from "next/navigation";
import AddButton from "@/app/components/AddButton";

const OnClickAddUser = () => {
  const router = useRouter();
  console.log("add user clicked");
  router.push("/users");
};

const NewUserPage = () => {
  return (
    <>
      <div className="p-5 my-5 bg-sky-600 text-white hover:ease-in">
        {" "}
        NewUserPage{" "}
      </div>
      <input type="text" name="name" />
      <AddButton name="adduser" action={() => OnClickAddUser} />
    </>
  );
};

export default NewUserPage;
