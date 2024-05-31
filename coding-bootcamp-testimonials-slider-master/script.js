const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const hero = document.querySelector(".hero");
const feedback = document.querySelector(".feedback");

const users = [
  {
    name: "Tanya Sinclair",
    role: "UX Engineer",
    feedback:
      "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”",
    hero: "/images/image-tanya.jpg",
  },

  {
    name: "John Tarkpor",
    role: "Junior Front-end Developer",
    feedback:
      "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about tarting up as a professional developer.",
    hero: "/images/image-john.jpg",
  },
];

let slide = 0;

const navigation = () => {
  if (slide > users.length - 1) {
    slide = 0;
  }
  hero.innerHTML = `<img src="${users[slide].hero}" alt="">`;
  feedback.innerHTML = `
  <img src="/images/pattern-quotes.svg" alt="">
  <p>${users[slide].feedback}</p>
  <h3 class="name">${users[slide].name} <span class="role">${users[slide].role}</span></h3>`;

  slide++
};

navigation();
prevBtn.addEventListener('click', navigation);
nextBtn.addEventListener('click', navigation);
