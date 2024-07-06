import React, { ReactNode } from "react";
import Sidebar from "@/components/sidebar";
import InfoBar from "@/components/infobar";
type Props = { children: ReactNode };

const layout = (props: Props) => {
  return (
    <div className=" flex overflow-hidden h-screen">
      <Sidebar />
      <div className=" w-full">
        <InfoBar/>
        {props.children}
        </div>
    </div>
  );
};

export default layout;
