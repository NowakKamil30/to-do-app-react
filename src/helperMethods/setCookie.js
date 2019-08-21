export default function setCookie(name, val, days, path, domain, secure) {
  if (navigator.cookieEnabled) {
    const cookieName = encodeURIComponent(name);
    const cookieVal = encodeURIComponent(JSON.stringify(val));
    let cookieText = cookieName + "=" + cookieVal;

    if (typeof days === "number") {
      const data = new Date();
      data.setTime(data.getTime() + days * 24 * 60 * 60 * 1000);
      cookieText += "; expires=" + data.toGMTString();
    }

    if (path) {
      cookieText += "; path=" + path;
    }
    if (domain) {
      cookieText += "; domain=" + domain;
    }
    if (secure) {
      cookieText += "; secure";
    }

    document.cookie = cookieText;
  }
}
