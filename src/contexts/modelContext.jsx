import { createContext, useState } from "react";
import Modal from "../utils/modal";
import NewPost from "../components/center/NewPost";

const ModalContext = createContext({
  openedModal: "",
  setopenedModal: () => {},
});

export const ModalProvider = ({ children }) => {
  const [openedModal, setopenedModal] = useState();
  const ctxVal = { openedModal, setopenedModal };
  return (
    <ModalContext.Provider value={ctxVal}>
      {children}
      <Modal
        open={openedModal === "new-post"}
        handleOnClick={() => setopenedModal("")}
      >
        <NewPost />
      </Modal>
    </ModalContext.Provider>
  );
};

export default ModalContext;
