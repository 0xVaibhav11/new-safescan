import React from "react";
import { Badge } from "./ui/badge";
import { shortenAddress } from "@/lib/utils";
import { FaGithub, FaXTwitter } from "react-icons/fa6";

type UserIdBadgeProps = {
  platform: string;
  id: string;
};

export const platforms = ["twitter", "ens", "github", "farcaster", "lens"];

export function UserIdBadge({ platform, id }: UserIdBadgeProps) {
  console.log(platform, id);
  const shortenId = shortenAddress(id, 4);
  if (platform === "ens") {
    return <Badge>{shortenId}</Badge>;
  } else if (platform === "twitter") {
    return (
      <Badge className=" flex gap-2 text-xs font-light text-white bg-black border border-white">
        <FaXTwitter /> @{shortenId}
      </Badge>
    );
  } else if (platform === "github") {
    return (
      <Badge className=" flex items-center justify-center gap-2 text-xs font-light text-white bg-slate-700">
        <FaGithub />
        {shortenId}
      </Badge>
    );
  } else if (platform === "farcaster") {
    return (
      <Badge className=" flex items-center justify-center gap-2 text-xs font-light text-white bg-purple-600">
        ⛩️
        {shortenId}
      </Badge>
    );
  } else if (platform === "lens") {
    return (
      <Badge className=" flex items-center justify-center gap-2 text-xs font-light text-white bg-green-800">
        🌿
        {shortenId}
      </Badge>
    );
  } else {
    return (
      <Badge>
        {platform}:{shortenId}
      </Badge>
    );
  }
}
