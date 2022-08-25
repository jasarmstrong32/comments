// run `node index.js` in the terminal

console.log(`Hello Node.js v${process.versions.node}!`);

const commentName = document.getElementById('#name').value;
const commentEmail = document.getElementById('#email').value;
const commentBody = document.getElementById('#comment-body').value;
const date = new Date();

const commentTemplate = document.createElement('template');
commentTemplate.innerHTML = `
  <style>
  .comment-comp {
    text-align: center;
    background: #e5cf00;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 10px;
    margin-bottom: 15px;
    border-bottom: #540707 5px solid;
  }
  p[class='comment-body'] {
    color: #540707;
    font-size: 1.5rem;
  }
  div[class='comment-info']{
    color: #540707;
    font-size: 1rem;
  }
  </style>
  <div class='comment-comp'>
      <p class='comment-body'></P>
      <div class='comment-info'>
        <p class='comment-name'></p>
        <p class='comment-email'></P>
        <p class='comment-dateTime'></p>
    </div>
`;

class CommentComp extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(commentTemplate.content.cloneNode(true));

    this.shadowRoot.querySelector('p[class="comment-body"]').innerText =
      `${commentBody}`;

    this.shadowRoot.querySelector('p[class="name"]').innerText = `${commentName}`;

    this.shadowRoot.querySelector('p[class="email"]').innerText = `${commentEmail}`;

    this.shadowRoot.querySelector('p[class="comment-dateTime"]').innerTeaxt = `${date}`
  }
}

window.customElements.define('comment-comp', CommentComp);

const commentDisplay = document.querySelector('.comment-display');

function postComment() {
  commentDisplay.innerHTML = `<comment-comp></comment-comp>`
}
const button = document.getElementById('submit');
button.addEventListener('click', function (evt) {
  evt.preventDefault(); //keeps page from loading error message after submit
  postComment(); //function call for alerts
  window.location.reload(true); //reloads window after submit
});