import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { useReplyPost } from "@/Hooks/post/useReplyPost";
import { useState } from "react";
import { AiOutlineComment } from "react-icons/ai";

export default function ReplyPost({ post_id }) {
  const [data, setData] = useState("");
  const [open, setOpen] = useState(false);
  const { mutate } = useReplyPost();

  const handleReplyPost = (e) => {
    setData(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpen(false);
    if (!data.trim()) return;
    mutate({ post_id, reply: data });
    setData("");
  };

  return (
    <div className="flex flex-col gap-4">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <button type="button" onClick={() => setOpen(true)}>
            <AiOutlineComment size={20} />
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-72">
          <h2 className="mb-2 text-sm font-semibold">Comment on the post</h2>
          <form className="space-y-3" onSubmit={handleSubmit}>
            <Textarea
              id="comment"
              placeholder="Express your feelings about the post"
              aria-label="Send feedback"
              value={data}
              onChange={handleReplyPost}
            />
            <div className="flex flex-col sm:flex-row sm:justify-end">
              <Button type="submit" size="sm">
                Post
              </Button>
            </div>
          </form>
        </PopoverContent>
      </Popover>
    </div>
  );
}
