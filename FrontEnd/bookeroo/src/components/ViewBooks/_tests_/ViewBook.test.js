import React from 'react';
import { createMemoryHistory } from 'history';
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBar from "../SearchBar";
import {AUTHMICROSERVICE_IP} from "../../../constants";

jest.mock('axios', () => {
    return {
      get: jest.fn(),
    }
});

// create books
const books = [{
    title: "book1",
    author: "John Appleseed",
    isbn: "103429852",
    genre: "Action",
    type: "new",
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
    type: "new",
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
        const mockHistory = {
            push: jest.fn(),
        }
        it("should return all books if search is empty", async () => {
            // mock axios post
            axios.get.mockResolvedValueOnce(books);

            const result = await axios.get(AUTHMICROSERVICE_IP + `/api/book/search`);
            
            expect(axios.get).toHaveBeenCalledWith(AUTHMICROSERVICE_IP + `/api/book/search`);
            expect(result).toEqual(books);
        });
        it("should return created book when searched by title", async () => {
            // mock axios post
            axios.get.mockResolvedValueOnce(books[0]);

            const search = "book1"
            const result = await axios.get(AUTHMICROSERVICE_IP + `/api/book/search/${search}`);

            expect(axios.get).toHaveBeenCalledWith(AUTHMICROSERVICE_IP + `/api/book/search/${search}`);
            expect(result).toEqual(books[0]);
        });
        it("should return the created book when searched by author", async () => {
            // mock axios post
            axios.get.mockResolvedValueOnce(books[0]);

            const search = "john"
            const result = await axios.get(AUTHMICROSERVICE_IP + `/api/book/search/${search}`);

            expect(axios.get).toHaveBeenCalledWith(AUTHMICROSERVICE_IP + `/api/book/search/${search}`);
            expect(result).toEqual(books[0]);
        });
        it("should return the created book when searched by ISBN", async () => {
            // mock axios post
            axios.get.mockResolvedValueOnce(books[0]);

            const search = "103429852"
            const result = await axios.get(AUTHMICROSERVICE_IP + `/api/book/search/${search}`);

            expect(axios.get).toHaveBeenCalledWith(AUTHMICROSERVICE_IP + `/api/book/search/${search}`);
            expect(result).toEqual(books[0]);
        });
        it("should return the created book when searched by category", async () => {
            // mock axios post
            axios.get.mockResolvedValueOnce(books[0]);

            const search = "action"
            const result = await axios.get(AUTHMICROSERVICE_IP + `/api/book/search/${search}`);

            expect(axios.get).toHaveBeenCalledWith(AUTHMICROSERVICE_IP + `/api/book/search/${search}`);

            expect(result).toEqual(books[0]);
        });
    });

    describe("when search button is clicked", () => {
        it("should redirect to SearchResults page", () => {
            const history = createMemoryHistory();
            axios.get.mockResolvedValueOnce(books[0]);
            
            render(<Router history={history}><SearchBar /></Router>);
            userEvent.type(screen.getByTestId('searchInput'), "book1");
            userEvent.click(screen.getByText('Search'));
            history.push("/searchResults");
            
            expect(history.location.pathname).toBe("/searchResults")
        });
    });
});

jest.mock('../BookInfo', () => {
    return {
        BookInfo: jest.fn(),
    }
});

describe("BookInfo", () => {
    describe("when selecting a particular book", () => {
        it("should return selected book", async () => {
            // mock axios post
            axios.get.mockResolvedValueOnce(books[0]);

            const bookid = 1;
            const result = await axios.get(AUTHMICROSERVICE_IP + `/api/book/searchbyid/${bookid}`);

            expect(axios.get).toHaveBeenCalledWith(AUTHMICROSERVICE_IP + `/api/book/searchbyid/${bookid}`);
            expect(result).toEqual(books[0]);
        });
    });
});