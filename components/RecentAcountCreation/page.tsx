import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { options } from "@/lib/AllData/AllOption";
import { useMyContext } from "@/context/AppContext";
import React from "react";
import DataTable from "./table";

interface TableData {
  Owner: number;
  BlockNumber: string;
  Time: number;
  hash: string;
}

const jsonData: TableData[] = [
  { Owner: 1, BlockNumber: "Alice", Time: 30, hash: "New York" },
  { Owner: 2, BlockNumber: "Bob", Time: 25, hash: "Los Angeles" },
  { Owner: 3, BlockNumber: "Charlie", Time: 35, hash: "Chicago" },
  // Add more data as needed
];
const page = () => {
  const { currentIndex, setCurrentIndex } = useMyContext();
  return (
    <div>
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList>
          {options.map((option, index) => (
            <TabsTrigger value={option.ScanLink} key={index}>
              {option.label}
            </TabsTrigger>
          ))}
        </TabsList>
        <DataTable data={jsonData} />
        {/* <TabsContent value="account">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent> */}
      </Tabs>
    </div>
  );
};

export default page;
