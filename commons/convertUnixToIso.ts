export default function convertUnixToIso(date: number): string {
  const unixMin = 0;
  const unixMax = Date.now() / 1000;

  if (date < unixMin || date > unixMax) throw new Error("Unix invalid");

  const unixDate = new Date(date * 1000);
  return unixDate.toISOString();
}
