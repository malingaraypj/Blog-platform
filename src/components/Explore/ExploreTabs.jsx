import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function ExploreTabs() {
  return (
    <Tabs defaultValue="Foryou" className="w-full max-w-[600px] mx-auto mt-5">
      <TabsList className="grid grid-cols-4 mb-4 bg-slate-500">
        <TabsTrigger className="text-white" value="Foryou">
          For You
        </TabsTrigger>
        <TabsTrigger className="text-white" value="Trending">
          Trending
        </TabsTrigger>
        <TabsTrigger className="text-white" value="Sports">
          Sports
        </TabsTrigger>
        <TabsTrigger className="text-white" value="Entertainment">
          Entertainment
        </TabsTrigger>
      </TabsList>

      <TabsContent value="Foryou">
        <div className="p-4 bg-muted/20 rounded-lg">
          <h2 className="text-xl font-bold mb-2">For You Content</h2>
          <p>Personalized content based on your interests and activity.</p>
        </div>
      </TabsContent>

      <TabsContent value="Trending">
        <div className="p-4 bg-muted/20 rounded-lg">
          <h2 className="text-xl font-bold mb-2">Trending Content</h2>
          <p>See what's trending right now across the platform.</p>
        </div>
      </TabsContent>

      <TabsContent value="Sports">
        <div className="p-4 bg-muted/20 rounded-lg">
          <h2 className="text-xl font-bold mb-2">Sports Content</h2>
          <p>Latest sports news, updates, and highlights.</p>
        </div>
      </TabsContent>

      <TabsContent value="Entertainment">
        <div className="p-4 bg-muted/20 rounded-lg">
          <h2 className="text-xl font-bold mb-2">Entertainment Content</h2>
          <p>Celebrity news, movies, TV shows, and entertainment gossip.</p>
        </div>
      </TabsContent>
    </Tabs>
  );
}

export default ExploreTabs;
