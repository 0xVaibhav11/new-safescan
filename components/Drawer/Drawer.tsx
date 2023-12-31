import { Copy } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function DialogCloseButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Testing Data </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="text-red-500 text-lg ">
          {" "}
          please Use Goerli for testing all Data
        </DialogHeader>
        <DialogHeader>
          <DialogTitle>Lens Profile</DialogTitle>
          <DialogDescription>
            Copy this to serch through Lens Profile
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Input id="link" defaultValue="vitalik.lens" readOnly />
          </div>
        </div>
        <DialogHeader>
          <DialogTitle>Twitter Profile</DialogTitle>
          <DialogDescription>
            Copy this to serch through Twitter Profile
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Input id="link" defaultValue="@suji_yan" readOnly />
          </div>
        </div>
        <DialogHeader>
          <DialogTitle>Safe Address</DialogTitle>
          <DialogDescription>
            Copy this for testing our Address Profile feature
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Input
              id="link"
              defaultValue="0xa43624b7472c37B1E1884645a3D04710afCD8eB5"
              readOnly
            />
          </div>
        </div>
        <DialogHeader>
          <DialogTitle> Safe Transaction hash</DialogTitle>
          <DialogDescription>
            {" "}
            Copy this for testing transaction hash
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Input
              id="link"
              defaultValue="0x492e1f5905fa51b38533e99fd6aa431915c40c09e9df4fce40b3d64539ba4893"
              readOnly
            />
          </div>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
