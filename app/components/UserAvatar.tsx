import { getServerSession } from "next-auth";
import Image from "next/image";
import React from "react";
import authOptions from "../api/auth/authOptions";

const UserAvatar = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div className="avatar">
      <div className="w-5 h-5 bg-base-200 rounded-full ring ring-primary ring-offset-base-50 ring-offset-2 mx-4">
        <Image
          src={
            session?.user!.image ||
            "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
          }
          alt={session?.user!.name || ""}
          width={48}
          height={48}
        />
      </div>
    </div>
  );
};

export default UserAvatar;
