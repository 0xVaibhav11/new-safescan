import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

import { options } from "@/lib/AllData/AllOption";
import { FiArrowDown } from "react-icons/fi";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";
import { RiFileList3Fill } from "react-icons/ri";

function shortenAddress(address: string | undefined, chars: 13 | 20) {
  // 0x6ebbb366bc7542eeee...5683
  if (!address) return null;
  if (chars === 13) return `${address.slice(0, 13)}...${address.slice(-4)}`;
  return `${address.slice(0, 20)}...${address.slice(-4)}`;
}
type DataRowProps = {
  userAddress: string | undefined;
  txnHash: string | undefined;
  action: string;
  time: string;
  block: string;
  fees: string;
};
export function DataRow({
  userAddress,
  txnHash,
  action,
  time,
  block,
  fees,
}: DataRowProps) {
  return (
    <div
      id="row"
      className=" w-full h-max p-4 flex justify-between items-center"
    >
      <div id="txnColumn" className="w-[45%] flex flex-col gap-2">
        <div className=" flex text-xs gap-2">
          <Badge className=" bg-green-500">twitter</Badge>
          <Badge>lol.eth</Badge>
          <Badge>ungatunga</Badge>
        </div>

        <div className=" flex gap-2 items-center  text-muted-foreground">
          <HiOutlineSwitchHorizontal />
          <p className=" text-foreground-900">
            {shortenAddress(userAddress, 20)}
          </p>
          <p className="">{time}</p>
        </div>
      </div>
      <div id="userColumn" className=" flex gap-2 items-center">
        <div className=" text-xl text-muted-foreground">
          <FiArrowDown />
        </div>
        <div className="flex flex-col gap-1">
          <p>{shortenAddress(txnHash, 13)}</p>
          <Badge className="flex gap-1">
            <RiFileList3Fill />
            {action}
          </Badge>
        </div>
      </div>
      <div id="timeColumn" className="">
        <div className=" flex gap-2">
          <p>Block</p>
          <p className=" text-muted-foreground">{block}</p>
        </div>
        <div className=" flex gap-2">
          <p>Fees</p>
          <p className=" text-muted-foreground">{fees}</p>
        </div>
      </div>
    </div>
  );
}

export default function LatestCreationFeed() {
  // owner/scials, txn hash, action(contract), time, block
  return (
    <div className=" w-full h-full">
      <Tabs defaultValue="Etherum" className="w-full">
        <TabsList className=" flex w-full overflow-x-scroll no-scrollbar">
          {options.map((option) => {
            return (
              <TabsTrigger
                key={option.value}
                className=" flex-grow"
                value={option.label}
              >
                {option.label}
              </TabsTrigger>
            );
          })}
        </TabsList>
        <TabsContent value="Etherum">
          <div className="w-full min-h-[100vh]  flex flex-col">
            <DataRow
              userAddress="0x792748f08f489488bfad5815a029082b1375bad1b2165bc3d6d1ddc652a09cff"
              txnHash="0x792748f08f489488bfad5815a029082b1375bad1b2165bc3d6d1ddc652a09cff"
              block="123456"
              fees="0.0000000"
              time="1 hour ago"
              action="CreateProxyWithNonce"
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
