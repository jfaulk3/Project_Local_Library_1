// Note: Please do not change the name of the functions. The tests use those names to validate your code.
function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) => {
    return accountA.name.last < accountB.name.last ? -1 : 1;
  });
}

function getTotalNumberOfBorrows(account, books) {
  return books.filter(({borrows}) => {
    return borrows.some((borrower) => borrower.id === account.id);
  }).length;
}

function getBooksPossessedByAccount(account, books, authors) {
  const list = books.filter(({borrows}) => {
    return borrows.some((borrower) => {
      return borrower.id === account.id && borrower.returned === false;
    });
  });

  list.map((book) => {
    return (book["author"] = authors.find(
      (author) => author.id === book.authorId
    ));
  });

  return list;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
