import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function GenCCard({ name, number, profileImage, info }) {
  return (
    <Card className="">
      <CardHeader>
        <CardTitle className="text-2xl ">{name}</CardTitle>
        <CardDescription>{number}</CardDescription>
      </CardHeader>
      <CardContent>
        <img src={profileImage} className="w-auto h-68 rounded-3xl transition hover:scale-125 duration-700 " />
      </CardContent>
      <CardFooter className="w-full">
        <Button className="w-full" onClick={info}>
          Info
        </Button>
      </CardFooter>
    </Card>
  );
}
