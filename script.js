const typingText = document.querySelector('.typing');
const roles = ["Web Developer", "Problem Solver", "Tech Enthusiast"];
let index = 0;
let charIndex = 0;

const type = () => {
  if (charIndex < roles[index].length) {
    typingText.textContent += roles[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 2000);
  }
};

const erase = () => {
  if (charIndex > 0) {
    typingText.textContent = roles[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    index = (index + 1) % roles.length;
    setTimeout(type, 500);
  }
};

type();
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  // Get form data
  const formData = new FormData(this);

  setTimeout(() => {
    alert('Your message has been sent!');
    this.reset(); 
  }, 1000);
});