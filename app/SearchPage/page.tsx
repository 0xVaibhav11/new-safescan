"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import {
  SelectContent,
  SelectTrigger,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import styles from "./page.module.scss";
const SearchPage = () => {
  return (
    <>
      <div className={styles.main}>
        <div style={{ marginBottom: "12px" }}>
          <Card>
            <CardHeader>
              <CardTitle> Account</CardTitle>

              <CardDescription>
                <div style={{ display: "flex" }}>
                  <img src="./orgi2.png" height={50} width={50} />{" "}
                  <span style={{ padding: "15px", fontSize: "20px" }}>
                    0x670D3DE9Ea8D545b682ef298105425e0BF51301a
                  </span>
                </div>
              </CardDescription>
            </CardHeader>
            {/* <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter> */}
          </Card>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "12px",
          }}
        >
          <Card className="w-[700px]">
            <CardHeader>
              <CardTitle>Overview</CardTitle>
              {/* <CardDescription> 0.006316480545808319 ETH</CardDescription> */}
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name"> ETH BALANCE</Label>
                    <div>$9.83 (@ $1,555.68/ETH)</div>
                  </div>
                  <div className="flex flex-col space-y-3.5">
                    <Label htmlFor="framework">TOKEN HOLDINGS</Label>
                    <Select>
                      <SelectTrigger id="framework">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent position="popper">
                        <SelectItem value="next">Next.js</SelectItem>
                        <SelectItem value="sveltekit">SvelteKit</SelectItem>
                        <SelectItem value="astro">Astro</SelectItem>
                        <SelectItem value="nuxt">Nuxt.js</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </form>
            </CardContent>
            {/* <CardFooter className="flex justify-between">
              <Button variant="outline">Cancel</Button>
              <Button>Deploy</Button>
            </CardFooter> */}
          </Card>
          <Card className="w-[700px]">
            <CardHeader>
              <CardTitle> More info</CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Social</Label>
                    <div className="flex flex-col">
                      <div
                        style={{
                          padding: "12px",
                          width: "5rem",
                          border: "2px solid white ",
                          borderRadius: "4px",
                        }}
                        className="outline-2   space-y-1.5 "
                      >
                        github
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-1.5 ">
                    <Label htmlFor="framework">Accounts</Label>
                    <Select>
                      <SelectTrigger id="framework">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent position="popper">
                        <SelectItem value="next">Next.js</SelectItem>
                        <SelectItem value="sveltekit">SvelteKit</SelectItem>
                        <SelectItem value="astro">Astro</SelectItem>
                        <SelectItem value="nuxt">Nuxt.js</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancel</Button>
              <Button>Deploy</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
};
export default SearchPage;
