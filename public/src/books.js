// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  return books.reduce(
    (acc, book) => {
      if (book.borrows[0].returned === false) {
        acc[0].push(book);
      } else {
        acc[1].push(book);
      }
      return acc;
    },
    [[], []]
  );
}

function getBorrowersForBook({borrows}, accounts) {
  return accounts
    .filter((account) => {
      //Get a list of accounts that borrowed book.
      return borrows.some((borrow) => borrow.id === account.id);
    })
    .map((account) => {
      //Appends `returned: true(of false) to obj`
      account["returned"] = borrows.find((borrow) => {
        return borrow.id === account.id;
      }).returned;
      return account;
    });
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
