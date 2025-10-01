import { db } from "@/config/firebase.config";
import LoaderPage from "@/routes/loader-page";
import type { User } from "@/types";
import { useAuth, useUser } from "@clerk/clerk-react";
import { getDoc, doc, serverTimestamp, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AuthHandler = () => {
  const { isSignedIn } = useAuth();
  const { user } = useUser();
  const pathname = useLocation().pathname;
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const storeData = async () => {
      if (isSignedIn && user) {
        setLoading(true);
        try {
          const usersnap = await getDoc(doc(db, "users", user.id));
          if (!usersnap.exists()) {
            const userData: User = {
              id: user.id,
              name: user.fullName || user.firstName || "Anonymous",
              email: user.primaryEmailAddress?.emailAddress || "N/A",
              imageUrl: user.imageUrl,
              createdAt: serverTimestamp(),
              updatedAt: serverTimestamp(),
            };
            await setDoc(doc(db, "users", user.id), userData);
          }
        } catch (error) {
          console.log("Error on Storing the user data" + error);
        } finally {
          setLoading(false);
        }
      }
    };
    storeData();
  }, [isSignedIn, user, pathname, navigate]);
  if (loading) {
    return <LoaderPage />;
  }
  return null;
};

export default AuthHandler;
