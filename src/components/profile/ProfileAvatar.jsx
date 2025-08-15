import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function ProfileAvatar() {
  return (
    <Avatar>
      <AvatarImage
        src={`${
          import.meta.env.VITE_BACKEND_PUBLIC_URL
        }/images/default_profile.jpg`}
        alt="Kelly King"
      />
      <AvatarFallback>KK</AvatarFallback>
    </Avatar>
  );
}
