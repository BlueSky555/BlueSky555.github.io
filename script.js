const $ = (e) => document.querySelector(e), $$ = (e) => document.querySelectorAll(e);

var curDir = 0;

$$(".go").forEach(el => el.onclick = () => {
  $("html").scrollBy(0, $("#" + el.getAttribute("to")).getBoundingClientRect().top - $("#nav").getBoundingClientRect().height - 10)
});