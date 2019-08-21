export default function readCookie(name) {
  if (document.cookie !== "") {
    const cookies = document.cookie.split(/; */);

    for (let i = 0; i < cookies.length; i++) {
      const cookieName = cookies[i].split("=")[0];
      const cookieVal = cookies[i].split("=")[1];
      if (cookieName === decodeURIComponent(name)) {
        return JSON.parse(decodeURIComponent(cookieVal));
      }
    }
  }
}
