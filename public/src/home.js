// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function getTotalBooksCount(books) {
  return Object.keys(books).length;
}

function getTotalAccountsCount(accounts) {
  return Object.keys(accounts).length;
}

function getBooksBorrowedCount(books) {
  return books.filter(book => {
    return book.borrows[0].returned === false;
  }).length;
}

function getMostCommonGenres(books) {
  let genres = [];
  books.forEach(book => {
    if (genres.some(genre => genre.name === book.genre)) {
      genres.find(genre => genre.name === book.genre).count += 1;
    } else {
      genres.push({
        name: book.genre,
        count: 1
      });
    }
  });
  sorted = genres.sort((a, b) => a.count > b.count ? -1 : 1).slice(0,5);
  return sorted;
} 

function getMostPopularBooks(books) {
  return books.map(book => {
    return {
      name: book.title,
      count: book.borrows.length
    }
  }).sort((a, b) => a.count > b.count ? -1 : 1).slice(0,5);
}

function getMostPopularAuthors(books, authors) {
  return authors.map(author => {
    return {
      name: `${author.name.first} ${author.name.last}`,
      count: books.filter(book => {
        return book.authorId === author.id;
      }).reduce((acc, book) => {
        return acc += book.borrows.length;
      }, 0)
    }
  }).sort((a, b) => a.count > b.count ? -1 : 1).slice(0,5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
