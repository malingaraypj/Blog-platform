import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import ProfileUpdateForm from "./profileUpdateform";
import { useState } from "react";

function EditUserProfile() {
  const [open, setopen] = useState();
  return (
    <Dialog open={open} onOpenChange={setopen}>
      <DialogTrigger asChild>
        <Button
          className="bg-blue-500 text-white hover:text-black"
          variant="secondary"
        >
          Edit profile
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[500px]">
        <DialogTitle></DialogTitle>
        <DialogDescription></DialogDescription>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="space-y-2"
        >
          {/* form to update user information */}
          <ProfileUpdateForm onSuccess={() => setopen(false)} />
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}

export default EditUserProfile;
