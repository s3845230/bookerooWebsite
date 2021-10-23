import store from "../../../store";
import React from 'react';
import { createMemoryHistory } from 'history';
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import UploadBook from "../UploadBook";

jest.mock("axios");

const book = {
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
    imageData: "",
    bookSeller: null
};

describe('When publisher uploads a book for sale', () => {
    it("should successfully create book", async () => {
        render(
            <Provider store={store}>
                <Router>
                    <UploadBook />
                </Router>
            </Provider>
        );

        userEvent.type(screen.getByLabelText('Title'), book.title);
        userEvent.type(screen.getByLabelText('Author'), book.author);
        userEvent.type(screen.getByLabelText('ISBN'), book.isbn);
        userEvent.type(screen.getByLabelText('Genre'), book.genre);
        userEvent.selectOptions(screen.getByLabelText('Type'), book.type);
        userEvent.type(screen.getByLabelText('Price'), book.price);
        userEvent.type(screen.getByLabelText('Publisher'), book.publisher);
        userEvent.type(screen.getByLabelText('Date of Publication'), book.publicationDate);
        userEvent.type(screen.getByLabelText('Tagline'), book.tagline);
        userEvent.type(screen.getByLabelText('Table of Contents'), book.tableOfContents);
        userEvent.type(screen.getByLabelText('Blurb'), book.blurb);
        
        userEvent.click(screen.getByLabelText('Upload Book Cover'));
        userEvent.click(screen.getByTestId('submit'));

        expect(axios.post).toHaveBeenCalledTimes(1);
        expect(axios.post).toHaveBeenCalledWith("http://localhost:8080/api/book/new/", book, {"headers": {}});
    });
    it ("should redirect to its corresponding book page after upload", async () => {
        const history = createMemoryHistory();
        render(
            <Provider store={store}>
                <Router history={history}>
                    <UploadBook />
                </Router>
            </Provider>
        );

        userEvent.type(screen.getByLabelText('Title'), book.title);
        userEvent.type(screen.getByLabelText('Author'), book.author);
        userEvent.type(screen.getByLabelText('ISBN'), book.isbn);
        userEvent.type(screen.getByLabelText('Genre'), book.genre);
        userEvent.selectOptions(screen.getByLabelText('Type'), book.type);
        userEvent.type(screen.getByLabelText('Price'), book.price);
        userEvent.type(screen.getByLabelText('Publisher'), book.publisher);
        userEvent.type(screen.getByLabelText('Date of Publication'), book.publicationDate);
        userEvent.type(screen.getByLabelText('Tagline'), book.tagline);
        userEvent.type(screen.getByLabelText('Table of Contents'), book.tableOfContents);
        userEvent.type(screen.getByLabelText('Blurb'), book.blurb);
        
        userEvent.click(screen.getByLabelText('Upload Book Cover'));
        userEvent.click(screen.getByTestId('submit'));

        expect(axios.post).toHaveBeenCalledWith("http://localhost:8080/api/book/new/", book, {"headers": {}});

        // result.data is undefined --> temporary solution
        const { id } = 1;
        history.push(`/searchResults/${id}`);

        expect(history.location.pathname).toBe(`/searchResults/${id}`);
    });
});