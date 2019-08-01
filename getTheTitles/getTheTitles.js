const books = [
  {
    title: 'Book',
    author: 'Name'
  },
  {
    title: 'Book2',
    author: 'Name2'
  }
]


// let getTheTitles = books.map(a => a.title);

var getTheTitles = (param) => { return param.map(a => a.title) };

console.log(getTheTitles(books))

module.exports = getTheTitles;
