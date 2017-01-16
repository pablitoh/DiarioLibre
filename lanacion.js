if (document.getElementById("iframe-registracion") != null) {
  document.getElementById("iframe-registracion").src = "about:blank";
}
document.getElementsByTagName("body")[0].style.overflow = 'auto';
if (document.getElementsByClassName("modal-scrollable")[0] != null) {
  document.getElementsByClassName("modal-scrollable")[0].remove();
}
if (document.getElementsByClassName("lnmodal pantalla-completa login")[0] != null) {
  document.getElementsByClassName("lnmodal pantalla-completa login")[0].remove();
}
