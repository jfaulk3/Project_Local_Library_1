// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function getTotalBooksCount(books) {
  return Object.keys(books).length;
}

function getTotalAccountsCount(accounts) {
  return Object.keys(accounts).length;
}

function getBooksBorrowedCount(books) {
  return books.filter((book) => {
    return book.borrows[0].returned === false;
  }).length;
}

function getMostCommonGenres(books) {
  const list = [];
  books.forEach((book) => {
    if (list.some(({name}) => name === book.genre)) {
      list.find(({name}) => name === book.genre).count += 1;
    } else {
      list.push({
        //creates a new object with name pointing to the genre and count
        //being the number of times it appears.
        name: book.genre,
        count: 1,
      });
    }
  });
  return _topFiveByCount(list);
}

function getMostPopularBooks(books) {
  const list = books.map(({title, borrows}) => {
    return {
      name: title,
      count: borrows.length,
    };
  });
  return _topFiveByCount(list);
}

function getMostPopularAuthors(books, authors) {
  const list = authors.map(({name, ...author}) => {
    //Generate an array of objects where the properties will be the 'name'
    //of an author and the 'count'
    return {
      name: `${name.first} ${name.last}`,
      count: books
        .filter((book) => {
          //Find books whose authorId matches the author id.
          return book.authorId === author.id;
        })
        .reduce((acc, {borrows}) => {
          //Number of times books were borrowed.
          return (acc += borrows.length);
        }, 0),
    };
  });
  return _topFiveByCount(list);
}

function _topFiveByCount(arr) {
  //Takes in an unsorted array. The array is expected to be
  //an array of objects who's properties are name and count.
  //The function will sort the array of objects by the object's
  //count value. It will then return the top five.

  return arr.sort((a, b) => (a.count > b.count ? -1 : 1)).slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
