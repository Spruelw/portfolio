var sections = document.querySelectorAll(".hide");

let observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log(entry);
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

sections.forEach((section) => {
  observer.observe(section);
});

var experienceList = document.querySelectorAll(".experience .item");
var hoverGlowTimeout = 4000;

function glow() {
  var i = 1;
  experienceList.forEach((item, i) => {
    setTimeout(() => {
      item.classList.add("glow");

      setTimeout(() => {
        item.classList.remove("glow");
      }, 4000);
      i++;
    }, 4000 * i);
  });
}
glow()
setInterval(() => {
    glow()
}, 16000);