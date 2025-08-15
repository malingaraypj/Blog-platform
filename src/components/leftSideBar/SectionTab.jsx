import TabOption from "./TabOption";
import NewPostButton from "./NewPostButton";

function SectionTab() {
  return (
    <>
      <div className="w-full flex flex-col justify-between items-center">
        {/* Tabs */}
        <div className="flex flex-col gap-3 w-[50%] items-center justify-between py-3">
          <TabOption Iconlabel="home" />
          <TabOption Iconlabel="explore" />
          <TabOption Iconlabel="notification" />
          <TabOption Iconlabel="messages" />
          <TabOption Iconlabel="profile" />
          <TabOption Iconlabel="more" />
        </div>
        <NewPostButton />
      </div>
    </>
  );
}

export default SectionTab;
