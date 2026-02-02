const noButton = document.querySelector(".btn-no");
const container = document.querySelector(".actions");

const moveButton = () => {
  const containerRect = container.getBoundingClientRect();
  const buttonRect = noButton.getBoundingClientRect();

  const maxX = containerRect.width - buttonRect.width;
  const maxY = containerRect.height - buttonRect.height;

  const newX = Math.max(0, Math.random() * maxX);
  const newY = Math.max(0, Math.random() * maxY);

  noButton.style.transform = `translate(${newX}px, ${newY}px)`;
};

noButton.addEventListener("mouseenter", moveButton);
noButton.addEventListener("focus", moveButton);
