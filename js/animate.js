var directionMenu = 1;

/* animate github icon */
let github = document.getElementById('github')

let githubLogo = bodymovin.loadAnimation({
  container: github,
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: "./assets/animate-icons/github.json"
});

github.addEventListener('mouseenter', (e) => {
  githubLogo.setDirection(directionMenu);
  githubLogo.play();
});

github.addEventListener('mouseleave', (e) => {
  githubLogo.setDirection(-directionMenu);
  githubLogo.play();
});

/* animate Twitter icon */
let twitter = document.getElementById('twitter')

let twitterLogo = bodymovin.loadAnimation({
  container: twitter,
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: "./assets/animate-icons/twitter.json"
});

twitter.addEventListener('mouseenter', (e) => {
  twitterLogo.setDirection(directionMenu);
  twitterLogo.play();
});

twitter.addEventListener('mouseleave', (e) => {
  twitterLogo.setDirection(-directionMenu);
  twitterLogo.play();
});

/* animate mail icon */
let mail = document.getElementById('mail')

let mailLogo = bodymovin.loadAnimation({
  container: mail,
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: "./assets/animate-icons/mail.json"
});

mail.addEventListener('mouseenter', (e) => {
  mailLogo.setDirection(directionMenu);
  mailLogo.play();
});

mail.addEventListener('mouseleave', (e) => {
  mailLogo.setDirection(-directionMenu);
  mailLogo.play();
});

/* animate arrow icon */
let arrow = document.getElementById('arrow')

let arrowLogo = bodymovin.loadAnimation({
  container: arrow,
  renderer: 'svg',
  loop: true,
  path: "./assets/animate-icons/arrowDown.json"
});
