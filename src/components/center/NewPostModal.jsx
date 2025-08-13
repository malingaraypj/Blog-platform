import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import NewPost from "./NewPost";

export default function NewPostModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="bg-blue-700 text-white px-5 py-3  w-[80%] text-xl hover:text-blue-600 "
          variant="secondary"
        >
          New Post
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[60%] h-[50%]">
        <NewPost />
      </DialogContent>
    </Dialog>
  );
}
