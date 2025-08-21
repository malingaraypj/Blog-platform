import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";
import { ScrollArea } from "../ui/scroll-area";
import UserItem from "./UserItem";
import { useSelector } from "react-redux";

export default function SearchCards({ users }) {
  const loggedUser = useSelector((state) => state.auth.user);

  if (!users) return null;

  return (
    <Card className="w-[95%] max-w-md bg-gray-700 border-none shadow-md m-auto text-white p-1">
      <CardContent className="py-3 px-2 w-full">
        <ScrollArea className="h-[300px] pr-2 w-full">
          <div className="flex flex-col gap-2 w-full overflow-hidden">
            {users.map((user) => {
              if (user._id === loggedUser._id) return null;
              return (
                <div key={user._id} className="w-full truncate">
                  <UserItem user={user} />
                </div>
              );
            })}
          </div>
        </ScrollArea>
      </CardContent>

      <CardFooter className="justify-center">
        <Button
          variant="ghost"
          className="underline decoration-dashed text-blue-100 "
        >
          <Link to="/app/explore">Show more</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
