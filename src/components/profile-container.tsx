import { useAuth, UserButton } from "@clerk/clerk-react";

import { Button } from "./ui/button";
import { Loader } from "lucide-react";
import { Link } from "react-router-dom";

const ProfileContainer = () => {
  const { isSignedIn, isLoaded } = useAuth();
  if (!isLoaded) {
    <Loader className="min-w-4 min-h-4 animate-spin text-emerald-500" />;
  }
  return (
    <div className="flex items-center gap-6">
      {isSignedIn ? (
        <UserButton afterSignOutUrl="/" />
      ) : (
        <Link to="/signin">
          <Button size={"sm"}>Get Started</Button>
        </Link>
      )}
    </div>
  );
};

export default ProfileContainer;
