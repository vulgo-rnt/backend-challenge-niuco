export default function checkPayer(
  status: "disabled" | "enabled",
  role: "viewer" | "system" | "editor" | "admin"
) {
  const res = {
    payer: false,
    active: false,
  };

  if (status === "disabled") return res;

  switch (role) {
    case "admin":
      res.active = true;
      res.payer = true;
      break;
    case "editor":
      res.active = true;
      res.payer = true;
    case "system":
      res.active = true;
    case "viewer":
      res.active = true;
    default:
      break;
  }
  return res;
}
