// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class. 
    this.expandButton = domElement.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = 'expand';
    // creating a delete button
    this.title = domElement.querySelector('h2');
    this.title.style.display = 'inline-block';
    this.date = domElement.querySelector('.date');
    domElement.insertBefore(document.createElement('button'), this.date);
    this.content = domElement.querySelector('p:not(.date)');
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', () => {
      /* Commenting out this to switch to using animation
      this.expandArticle();
      this.expandButton.textContent === 'expand' ? this.expandButton.textContent = 'collapse' : this.expandButton.textContent = 'expand';
      */
      if (this.expandButton.textContent === 'expand') {
        this.domElement.animate(expand, {
          duration: 800,
          fill: 'forwards',
          easing: `ease-in-out`
        });
        this.expandButton.textContent = 'collapse';
      } else {
        this.domElement.animate(expand, {
          duration: 800,
          fill: 'forwards',
          direction: 'reverse',
          easing: `ease-in-out`
        });
        this.expandButton.textContent = 'expand';
      }
    })
    // Added a remove button to remove article read
    this.deleteButton = domElement.querySelector('button');
    this.deleteButton.textContent = 'Remove';
    this.deleteButton.addEventListener('click', () => {
      this.domElement.style.display = 'none';
    })
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    /*
    While I could just toggle the .article-open class, the css limits the height to 400px and the longer text gets cut off, so I changed the height to 'auto'
    this.domElement.classList.toggle('article-open');
    */
    this.domElement.style.height === 'auto' ? this.domElement.style.height = '50px' : this.domElement.style.height = 'auto';
  }
}

/* START HERE: 
- Select all classes named ".article" and assign that value to the articles variable.  
- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.
*/

let articles = document.querySelectorAll('.article');

articles.forEach(element => {
  const articleInstance = new Article(element);
})

//Adding animation to article opening and closing
let expand = [
  {
    height: '50px',
    background: 'white'
  },
  {
    height: '250px',
    background: '#c8efbd'
  },
  {
    height: '500px',
    background: 'white'
  }
]


function getArticle() {
  let testDiv = document.createElement('div');
  let testTitle = document.createElement('h2');
  testTitle.textContent = document.getElementById('article-title').value;
  let testDate = document.createElement('p');
  testDate.classList.add('date');
  testDate.textContent = document.getElementById('article-date').value;
  let testContent = document.createElement('p');
  testContent.textContent = document.getElementById('article-content').value;
  testDiv.appendChild(testTitle);
  testDiv.appendChild(testDate);
  testDiv.appendChild(testContent);
  testDiv.classList.add('article');
  document.querySelector('.articles').appendChild(testDiv);
}

let submitBtn = document.querySelector('.write-article button');
submitBtn.addEventListener('click', () => {
  event.preventDefault();
  getArticle();
  document.getElementById('input-form').reset();
})
