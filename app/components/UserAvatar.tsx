import Image from "next/image";
import React from "react";

const UserAvatar = () => {
  return (
    <div className="avatar">
      <div className="w-5 h-5 bg-base-200 rounded-full ring ring-primary ring-offset-base-50 ring-offset-2 mx-4">
        {/* <Image
          src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
          alt=""
          className="rounded-full"
          width={48}
          height={48}
        /> */}
      </div>
    </div>
  );
};

export default UserAvatar;
