import React from "react";

interface Props {
  params: { asset: string[] };
  searchParams: { sortOrder: string };
}

const AssetsPage = ({
  params: { asset },
  searchParams: { sortOrder },
}: Props) => {
  return (
    <div>
      AssetsPage {asset}
      {sortOrder}
    </div>
  );
};

export default AssetsPage;
