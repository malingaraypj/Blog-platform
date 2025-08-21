import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import FileUploadInput from "@/utils/file-upload";
import { useState } from "react";
import { useActionState } from "react";
import { updateUser } from "@/api/user";

export default function ProfileUpdateForm({ onSuccess }) {
  const [profileImage, setprofileImage] = useState();
  const [coverImage, setcoverImage] = useState();

  const handleUserUpdateAction = async (prevState, formData) => {
    // Create a new FormData instance to handle file uploads
    const updatedFormData = new FormData();

    const values = {
      username: formData.get("username"),
      email: formData.get("email"),
      bio: formData.get("bio"),
      location: formData.get("location"),
      website: formData.get("website"),
      DOB: formData.get("DOB"),
    };

    // Add text fields to FormData
    if (values.username !== "")
      updatedFormData.append("username", values.username);
    if (values.email !== "") updatedFormData.append("email", values.email);
    if (values.bio !== "") updatedFormData.append("bio", values.bio);
    if (values.location !== "")
      updatedFormData.append("location", values.location);
    if (values.website !== "")
      updatedFormData.append("website", values.website);
    if (values.DOB !== "") updatedFormData.append("DOB", values.DOB);

    if (profileImage) updatedFormData.append("profileImage", profileImage);
    if (coverImage) updatedFormData.append("coverImage", coverImage);

    try {
      // Call API endpoint with FormData
      const response = await updateUser(updatedFormData);
      console.log(response?.data);
      onSuccess();
    } catch (error) {
      console.log(error);
      return {
        errors: [{ path: "backend", message: error.message }],
        enteredValues: values,
      };
    }
  };

  const [formState, userFormAction] = useActionState(handleUserUpdateAction, {
    errors: null,
  });

  return (
    <Card className="max-w-2xl mx-auto shadow-md rounded-2xl">
      {formState?.errors && (
        <div className="space-y-2">
          {formState?.errors.map((error, i) => (
            <p key={i} className="text-red-400 text-center">
              {error.message}
            </p>
          ))}
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Update Profile</CardTitle>
      </CardHeader>
      <CardContent>
        <form action={userFormAction} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Username</label>
            <Input
              defaultValue={formState?.enteredValues?.username}
              name="username"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Email</label>
            <Input
              defaultValue={formState?.enteredValues?.email}
              type="email"
              name="email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Date of Birth</label>
            <Input
              defaultValue={formState?.enteredValues?.date}
              type="date"
              name="DOB"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Bio</label>
            <Textarea
              name="bio"
              defaultValue={formState?.enteredValues?.bio}
              placeholder="Write something about yourself..."
              rows={3}
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Location</label>
            <Input
              defaultValue={formState?.enteredValues?.location}
              name="location"
              placeholder="City, Country"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Website</label>
            <Input
              type="url"
              name="website"
              defaultValue={formState?.enteredValues?.website}
              placeholder="https://example.com"
            />
          </div>
          <div className="flex justify-between w-full gap-5">
            <div className="w-[50%]">
              <label className="block text-sm font-medium">
                Profile Picture
              </label>
              <FileUploadInput
                type="image"
                onSelect={(file) => setprofileImage(file)}
                showSelection={true}
              />
            </div>
            <div className="w-[50%]">
              <label className="block text-sm font-medium">Cover Picture</label>
              <FileUploadInput
                type="image"
                onSelect={(file) => setcoverImage(file)}
                showSelection={true}
              />
            </div>
          </div>
          <Button type="submit" className="w-full">
            Save Changes
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
