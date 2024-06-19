import NavBar from "@/components/Nav";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import LiftForm from "./LiftForm";
import { LiftList } from "./LiftList";
import { getLifts } from "./actions";

export default async function () {
  const lifts = await getLifts();

  console.log(lifts);

  return (
    <div className="w-11/12 mt-4">
      <NavBar items={["gym", "home"]} />
      <h1 className="text-2xl">Gym</h1>

      <Card className="w-2/5 mt-4 bg-black/30">
        <CardHeader>Add New Lift</CardHeader>
        <CardContent>
          <LiftForm />
        </CardContent>
      </Card>
      <LiftList lifts={lifts} />
    </div>
  );
}
