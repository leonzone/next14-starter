"use server";
import { signIn, signOut } from "./auth";

export const handleGithubLogin = async () => {
    "use server";
    await signIn("github");
}
