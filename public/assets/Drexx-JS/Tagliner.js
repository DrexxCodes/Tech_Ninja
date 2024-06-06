const words = ["Mod APKS", "Movie Buffs", "Gadget Complements", "Tech Digest & Blog", "Recommended Apps", ];
const el = document.querySelector("#typewriter");

const sleepTime = 300;
let currWordIndex = 0;

const sleep = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};

const effect = async () => {
  while (true) {
    currWord = words[currWordIndex];

    for (let i = 0; i < currWord.length; i++) {
      el.innerText = currWord.substring(0, i + 1);
      await sleep(sleepTime);
    }

    await sleep(900);

    if (currWordIndex >= words.length - 1) {
      currWordIndex = 0;
      await sleep(1000);
    } else currWordIndex++;
  }
};

effect();

const button = document.querySelector(".my-btn");
const inner = document.querySelector(".inner");

button.addEventListener("mousemove", (e) => {
  const rect = button.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  button.style.setProperty("--mouseX", `${x}px`);
  button.style.setProperty("--mouseY", `${y}px`);
});

