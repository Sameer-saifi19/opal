"use client";

import { WorkSpace } from "@prisma/client";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {
  workspace: WorkSpace;
};

const GlobalHeader = ({workspace}: Props) => {
  const pathName = usePathname().split(`/dashboard/${workspace.id}`);
  return <div>GlobalHeader</div>;
};

export default GlobalHeader;
