const book = {
    title: "The prisoner of Azkaban",
    author: "J. K. Rowling",
    published: 1999,
    numberOfPages: 448,
    rating: 5,
    bestseller: true,
    series: "Harry Potter",
    volume: 3,
    ISBN: "0439136350",
    publisher: "Scholastic",
    bookmarkedPage: 325,
    loadBookmarkedPage: function(){
        return this.bookmarkedPage;
    }
};
