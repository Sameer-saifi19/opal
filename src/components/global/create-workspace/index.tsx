"use client";

import { getWorkSpaces } from "@/actions/workspace";
import { useQueryData } from "@/hooks/useQueryData";
import React from "react";
import Modal from "../modal";
import { Button } from "@/components/ui/button";
import { FolderPlus } from "lucide-react";
import WorkspaceForm from "@/components/form/workspace-form";

type Props = {};

const CreateWorkspace = (props: Props) => {
  const { data } = useQueryData(["user-workspaces"], getWorkSpaces);

  const { data: plan } = data as {
    status: number;
    data: {
      subscription: {
        plan: "PRO" | "FREE";
      } | null;
    };
  };

  if (plan.subscription?.plan === "FREE") {
    return <></>;
  }

  if (plan.subscription?.plan === "PRO") {
    return (
      <Modal
        title="Create a Workspace"
        description="Workspace helps you collaborate with team members. You are assigned a default personal workspace where you can share videos in private with yourself."
        trigger={
          <Button className="bg-[#1d1d1d] text-[#707070] flex items-center gap-2 py-6 px-4 rounded-2xl ">
            <FolderPlus />
          </Button>
        }
      >
        <WorkspaceForm/>
      </Modal>
    );
  }

};

export default CreateWorkspace;
