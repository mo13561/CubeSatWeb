import * as Realm from "realm-web";

const app = new Realm.App({ id: "cubesatweb-ycdlh" });
// Create an anonymous credential
const credentials = Realm.Credentials.anonymous();
try {
  // Authenticate the user
  const user = await app.logIn(credentials);
  // `App.currentUser` updates to match the logged in user
  assert(user.id === app.currentUser.id)
  return user
} catch(err) {
  console.error("Failed to log in", err);
}