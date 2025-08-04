
  const roles = ["Web Developer", "Software Engineer", "C# Programmer", "Full Stack Developer","Search Engine Optimization"];
  let roleIndex = 0;
  let charIndex = 0;
  const roleElement = document.getElementById("role");

  function typeRole() {
    if (charIndex < roles[roleIndex].length) {
      roleElement.textContent += roles[roleIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeRole, 100); // typing speed
    } else {
      setTimeout(eraseRole, 1500); // delay before erasing
    }
  }

  function eraseRole() {
    if (charIndex > 0) {
      roleElement.textContent = roles[roleIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(eraseRole, 50); // erasing speed
    } else {
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(typeRole, 500); // delay before typing next
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    typeRole();
  });







