"use client";
import { useParams, useRouter } from "next/navigation";
export default function ProfileID() {
  const params = useParams();
  const router = useRouter();
  return (
    <div>
      <h1>Profile 1</h1>
      <p>This is my profile ID {params.id} </p>
      <div onClick={() => router.push("/profile")}>
        Back to the profile list
      </div>
    </div>
  );
}
