import { signIn } from "@/auth";

export default function SignIn() {
  return (
    <form
      action={async (formData) => {
        "use server";
        try {
          const callbackUrl = `${window.location.protocol}//${window.location.host}`;
          const response = await signIn("credentials", {
            email: formData.get("email"),
            password: formData.get("password"),
            userType: formData.get("userType"),
            callbackUrl,
          });
          console.log("response", response);
        } catch (error) {
          console.error("Error during sign-in", error);
        }
      }}
    >
      <label>
        Email
        <input name="email" type="email" />
      </label>
      <label>
        Password
        <input name="password" type="password" />
      </label>
      <input name="userType" type="text" defaultValue="regular" />
      <button>Sign In</button>
    </form>
  );
}
