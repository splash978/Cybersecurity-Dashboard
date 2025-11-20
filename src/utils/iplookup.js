export const lookupIP = async (ip) => {
  const url = `http://ip-api.com/json/${ip}`;
  const res = await fetch(url);
  return res.json();
};