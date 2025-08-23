import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function ExploreTabs({ onTabChange }) {
  return (
    <Tabs
      defaultValue="technology"
      className="w-full max-w-[600px] mx-auto mt-5"
    >
      <TabsList className="grid grid-cols-5 mb-4 bg-slate-500">
        <TabsTrigger
          onClick={() => onTabChange("general")}
          className="text-white"
          value="general"
        >
          General
        </TabsTrigger>
        <TabsTrigger
          onClick={() => onTabChange("Music")}
          className="text-white"
          value="Music"
        >
          Music
        </TabsTrigger>
        <TabsTrigger
          onClick={() => onTabChange("entertainment")}
          className="text-white"
          value="entertainment"
        >
          Entertainment
        </TabsTrigger>
        <TabsTrigger
          onClick={() => onTabChange("sports")}
          className="text-white"
          value="sports"
        >
          Sports
        </TabsTrigger>
        <TabsTrigger
          onClick={() => onTabChange("news")}
          className="text-white"
          value="news"
        >
          News
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}

export default ExploreTabs;
