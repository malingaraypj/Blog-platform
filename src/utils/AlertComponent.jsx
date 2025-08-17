import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { alertActions } from "@/store/alert/alertSlice";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function AlertComponent() {
  const alertRef = useRef();
  const status = useSelector((state) => state.alert.status);
  const message = useSelector((state) => state.alert.message);

  const dispatch = useDispatch();

  useEffect(() => {
    if (status == "open") {
      alertRef.current.click();
    }
  }, [status]);

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="hidden" ref={alertRef} variant="outline">
          Alert dialog
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>{message}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={dispatch(alertActions.closeAlert())}>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction onClick={dispatch(alertActions.closeAlert())}>
            Okay
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
