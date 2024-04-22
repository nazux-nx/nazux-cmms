import React from "react";
import UserTable from "./UserTable";
import Link from "next/link";
interface Props {
  params: { user: string[] };
  searchParams: { sortOrder: string };
}
const UsersPage = async ({ searchParams: { sortOrder } }: Props) => {
  return (
    <>
      <h1>Users</h1>
      <Link href="/users/new" className="btn  ">
        New User
      </Link>
      <UserTable sortOrder={sortOrder} />

      <div> </div>
    </>
  );
};

export default UsersPage;
