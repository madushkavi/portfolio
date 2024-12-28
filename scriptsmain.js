var i = 0;
var text1 = "Undergraduate";
var text2 = "Full Stack Developer";
var speed = 50;
var currentText = 1;

function typeWriter(txt) {
  if (i < txt.length) {
    document.getElementById("typewriting-content-para").innerHTML += txt.charAt(i);
    i++;
    setTimeout(() => typeWriter(txt), speed);
  } else {
    i = 0;
    setTimeout(() => {
      document.getElementById("typewriting-content-para").innerHTML = "";
      currentText = currentText === 1 ? 2 : 1;
      typeWriter(currentText === 1 ? text1 : text2);
    }, 1000);
  }
}

window.onload = function () {
  typeWriter(text1);
};

document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBars = entry.target.querySelectorAll('.progress-bar-animate');
                
                progressBars.forEach(bar => {
                    const width = bar.getAttribute('data-width') + '%';
                    setTimeout(() => {
                        bar.style.width = width;
                    }, 200);
                });
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    const skillsSection = document.querySelector('.about-us-skill-showcase');
    if (skillsSection) {
        observer.observe(skillsSection);
    }
});