export default async function getUsers() {
  const url = process.env.URL;
  const data = await (await fetch(`${url}users`)).json();
  return data;
}
