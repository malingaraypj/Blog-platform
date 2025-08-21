import ProfilePicture from "../components/profile/ProfilePicture";
import UserData from "../components/profile/UserData";
import UserOptions from "../components/profile/UserOptions";
import { useQuery } from "@tanstack/react-query";
import { getMe } from "../api/user";
import { LoaderFive } from "@/components/ui/loader";
import PageHeader from "@/components/layout/pageHeader";

function UserProfile() {
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["userProfile"],
    queryFn: getMe,
    refetchOnWindowFocus: true,
  });
  if (isLoading) {
    return <LoaderFive />;
  }
  if (isError) {
    if (isError) return <QueryError error={error} reset={refetch} />;
  }

  return (
    <div className="flex flex-col items-center justify-start p-5 h-screen overflow-auto scrollbar-hide">
      <PageHeader title={data.username} subtitle={data.post_count} />
      {/* component to store userProfile picture */}
      <ProfilePicture />
      {/* Component to store user personal details */}
      <UserData data={data} />
      {/* Component to switch between differnt details of user interactions */}
      <UserOptions />
    </div>
  );
}

export default UserProfile;
