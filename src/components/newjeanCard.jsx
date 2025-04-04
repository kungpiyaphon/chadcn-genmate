import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function NewjeanCard({ name, role, profileImage, buy }) {
  return (
    <Card className="">
      <CardHeader>
        <CardTitle className="text-2xl ">{name}</CardTitle>
        <CardDescription>{role}</CardDescription>
      </CardHeader>
      <CardContent>
        <img src={profileImage} className="w-auto h-68 rounded-3xl transition hover:scale-125 duration-700 " />
      </CardContent>
      <CardFooter className="w-full">
        <Button className="w-2/3" onClick={buy}>
          Buy
        </Button>
        <Button variant="ghost" onClick={() => toast.message("Selling Your item", { description: "please wait for server" })} className="w-1/3">
          Sell
        </Button>
      </CardFooter>
    </Card>
  );
}
