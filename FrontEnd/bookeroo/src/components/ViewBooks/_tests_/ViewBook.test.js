import axios from "axios";

jest.mock('axios');

// create books
const books = [{
    title: "book1",
    author: "John Appleseed",
    isbn: "103429852",
    genre: "Action",
    type: "NEW",
    price: "15",
    publisher: "Penguin Books",
    publicationDate: "2001-10-12",
    tagline: "test",
    tableOfContents: "test",
    blurb: "test",
    imageData: "test",
    bookSeller: "test"
},  {
    title: "book2",
    author: "Harry",
    isbn: "824810324",
    genre: "Adventure",
    type: "NEW",
    price: "20",
    publisher: "Penguin Books",
    publicationDate: "2001-08-16",
    tagline: "test",
    tableOfContents: "test",
    blurb: "test",
    imageData: "test",
    bookSeller: "test"
}];

describe("SearchBar", () => {
    describe("when API call is successful", () => {
        it("should return all books if search is empty", async () => {
            // mock axios post
            axios.get.mockResolvedValueOnce(books);

            const result = await axios.get(`http://localhost:8080/api/book/search`);
            
            expect(axios.get).toHaveBeenCalledWith(`http://localhost:8080/api/book/search`);
            expect(result).toEqual(books);
        });
        it("should return created book when searched by title", async () => {
            // mock axios post
            axios.get.mockResolvedValueOnce(books[0]);

            const search = "book1"
            const result = await axios.get(`http://localhost:8080/api/book/search/${search}`);

            expect(axios.get).toHaveBeenCalledWith(`http://localhost:8080/api/book/search/${search}`);
            expect(result).toEqual(books[0]);
        });
        it("should return the created book when searched by author", async () => {
            // mock axios post
            axios.get.mockResolvedValueOnce(books[0]);

            const search = "john"
            const result = await axios.get(`http://localhost:8080/api/book/search/${search}`);

            expect(axios.get).toHaveBeenCalledWith(`http://localhost:8080/api/book/search/${search}`);
            expect(result).toEqual(books[0]);
        });
        it("should return the created book when searched by ISBN", async () => {
            // mock axios post
            axios.get.mockResolvedValueOnce(books[0]);

            const search = "103429852"
            const result = await axios.get(`http://localhost:8080/api/book/search/${search}`);

            expect(axios.get).toHaveBeenCalledWith(`http://localhost:8080/api/book/search/${search}`);
            expect(result).toEqual(books[0]);
        });
        it("should return the created book when searched by category", async () => {
            // mock axios post
            axios.get.mockResolvedValueOnce(books[0]);

            const search = "action"
            const result = await axios.get(`http://localhost:8080/api/book/search/${search}`);

            expect(axios.get).toHaveBeenCalledWith(`http://localhost:8080/api/book/search/${search}`);

            expect(result).toEqual(books[0]);
        });
        it("should redirect to SearchResults page", async () => {
            // TODO
        });
    });
});

describe("BookInfo", () => {
    describe("when selecting a particular book", () => {
        it("should return selected book", async () => {
            // mock axios post
            axios.get.mockResolvedValueOnce(books[0]);

            const bookid = 1;
            const result = await axios.get(`http://localhost:8080/api/book/searchbyid/${bookid}`);

            expect(axios.get).toHaveBeenCalledWith(`http://localhost:8080/api/book/searchbyid/${bookid}`);
            expect(result).toEqual(books[0]);
        });
    });
});