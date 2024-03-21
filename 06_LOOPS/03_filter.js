const books = [
    {
        title: "The Da Vinci Code",
        author: "Dan Brown",
        year: 2003,
        genre: "Mystery",
        pages: 454
    },
    {
        title: "Harry Potter and the Order of the Phoenix",
        author: "J.K. Rowling",
        year: 2003,
        genre: "Fantasy",
        pages: 870
    },
    {
        title: "The Hunger Games",
        author: "Suzanne Collins",
        year: 2008,
        genre: "Young Adult, Science Fiction",
        pages: 374
    },
    {
        title: "The Girl with the Dragon Tattoo",
        author: "Stieg Larsson",
        year: 2005,
        genre: "Thriller, Crime",
        pages: 672
    },
    {
        title: "The Help",
        author: "Kathryn Stockett",
        year: 2009,
        genre: "Historical Fiction",
        pages: 464
    },
    {
        title: "Life of Pi",
        author: "Yann Martel",
        year: 2001,
        genre: "Adventure, Fantasy",
        pages: 319
    },
    {
        title: "A Thousand Splendid Suns",
        author: "Khaled Hosseini",
        year: 2007,
        genre: "Historical Fiction",
        pages: 432
    },
    {
        title: "The Kite Runner",
        author: "Khaled Hosseini",
        year: 2003,
        genre: "Historical Fiction",
        pages: 371
    },
    {
        title: "The Road",
        author: "Cormac McCarthy",
        year: 2006,
        genre: "Post-Apocalyptic, Fiction",
        pages: 287
    },
    {
        title: "The Book Thief",
        author: "Markus Zusak",
        year: 2005,
        genre: "Historical Fiction",
        pages: 552
    },
];

// User is asking for books published after 2005

const booksAfter2005 = books.filter( (book)=> book.year > 2005)

// console.log(booksAfter2005)

const filteredBooks = books.filter( (book)=>{
    return book.year >= 2005 && book.pages >= 500
})

const {log: print} = console

print(filteredBooks)