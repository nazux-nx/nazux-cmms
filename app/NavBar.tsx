"use client";
import React from "react";
import Link from "next/link";
import { getSession, useSession } from "next-auth/react";
import UserAvatar from "./components/UserAvatar";

const NavBar = () => {
  const { status, data: session } = useSession();

  return (
    <div className="flex p-2 bg-slate-200">
      <Link href="/" className="mr-5">
        nx-cmms
      </Link>
      <Link href="/users" className="mr-5">
        users
      </Link>
      <Link href="/admin" className="mr-5">
        admin
      </Link>
      <div className="flex mr-8 ">
        {status === "loading" && (
          <div>
            <span className="loading loading-dots loading-sm"></span>
          </div>
        )}
        {status === "unauthenticated" && (
          <Link href="/api/auth/signin" className="mr-15">
            Login
          </Link>
        )}

        {status === "authenticated" && (
          <>
            <div className="mr-5">{session.user!.name}</div>
            <Link href="/api/auth/signout" className="mr-15">
              Logout
            </Link>
            <UserAvatar />
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
