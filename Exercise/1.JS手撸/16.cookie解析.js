function getCookie(name) {
  var allCookie = document.cookie.split("; ");
  for (let i = 0; i < allCookie.length; i++) {
    var tmp = allCookie[i].split("=");
    if (name == tmp[0])
      return tmp[1];
  }
  return null;
}