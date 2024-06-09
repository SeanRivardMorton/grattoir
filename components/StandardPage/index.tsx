import React from "react";

const StandardPage = ({ children }: React.PropsWithChildren) => {
  return <div className=" w-11/12 mt-4">{children}</div>;
};

export default StandardPage;
