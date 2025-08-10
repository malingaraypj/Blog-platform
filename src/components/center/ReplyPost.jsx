import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { AiOutlineComment } from "react-icons/ai";

export default function ReplyPost({ onClick }) {
  return (
    <div className="flex flex-col gap-4">
      <Popover>
        <PopoverTrigger asChild>
          <AiOutlineComment size={20} />
          {/* <Button variant="outline">Send a reply</Button> */}
        </PopoverTrigger>
        <PopoverContent className="w-72">
          <h2 className="mb-2 text-sm font-semibold">Comment on the post</h2>
          <form className="space-y-3">
            <Textarea
              id="comment"
              placeholder="Express your feelings about the post"
              aria-label="Send feedback"
            />
            <div className="flex flex-col sm:flex-row sm:justify-end">
              <Button onClick={onClick} size="sm">
                Post
              </Button>
            </div>
          </form>
        </PopoverContent>
      </Popover>
    </div>
  );
}
