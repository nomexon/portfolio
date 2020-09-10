import { auth } from "./fb";

export default async function sending(
  e,
  email,
  password,
  setErrEmail,
  setErrPass
) {
  e.preventDefault();
  await auth
    .signInWithEmailAndPassword(email, password)
    .catch(function (error) {
      let errorCode = error.code;
      let errorMessage = error.message;

      if (errorCode === "auth/invalid-email") {
        setErrEmail("Invalid email");
        setErrPass("");
      } else if (errorCode === "auth/wrong-password") {
        setErrPass(
          "The password is invalid or the user does not have a password"
        );
        setErrEmail("");
      } else if (errorCode === "auth/user-not-found") {
        setErrEmail("User not found");
        setErrPass("");
      } else {
        setErrEmail("");
        setErrPass("");
      }
    });
}
