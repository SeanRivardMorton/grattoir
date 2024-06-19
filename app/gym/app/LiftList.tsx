import { AddLiftSchemaType } from "@/app/gym/app/LiftForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const LiftList = ({ lifts }: { lifts: AddLiftSchemaType[] }) => {
  return (
    <>
      {lifts.map((lift) => {
        return (
          <Card
            key={lift.name}
            className="bg-black/10 p-4 mt-4 min-w-4/5 w-1/5"
          >
            <CardHeader>
              <CardTitle>{lift.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{lift.description}</p>
            </CardContent>
          </Card>
        );
      })}
    </>
  );
};
