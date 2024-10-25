export default function emailBlur(email: string): string {
  const regexEmail = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
  if (!regexEmail.test(email)) throw new Error("Email invalid");

  const regexDomain = /niuco.com.br/g;
  if (regexDomain.test(email)) return email;
  else {
    const [alias, domain] = email.split("@");
    const firsts = alias.slice(0, 2);
    const ends = alias.slice(-2);
    const blur = "*".repeat(alias.length - 4);
    return firsts + blur + ends + "@" + domain;
  }
}
