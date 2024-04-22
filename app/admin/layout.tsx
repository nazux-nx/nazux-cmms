import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const AdminLayoutPage = ({ children }: Props) => {
  return (
    <div className="flex">
      <aside className="mr-5 p-5 bg-slate-200">Admin sidebar</aside>
      <div>{children}</div>
    </div>
  );
};

export default AdminLayoutPage;
