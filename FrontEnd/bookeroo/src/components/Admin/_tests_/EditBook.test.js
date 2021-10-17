import React from 'react';
import store from "../../../store";
import { Provider } from "react-redux";
import { createMemoryHistory } from 'history';
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import EditBook from "../EditBook";
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, mount } from 'enzyme';

configure({adapter: new Adapter()});

jest.mock('axios', () => {
    return {
      get: jest.fn(),
    }
});

// create books
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
    imageData: "test",
    bookSeller: "test"
};

describe("When Admin clicks on a book to edit", () => {
    it("should prefil all information in a edit form", async () => {
        const history = createMemoryHistory();
        const state = { book: book }

        render(
            <Provider store={store}>
                <Router history={history}>
                    <Route path="/admin/viewAllBooks/editBook/1" component={EditBook} />
                </Router>
            </Provider>
        );

        history.push("/admin/viewAllBooks/editBook/1", state);
        // const input = screen.getByLabelText("Title");

        // fireEvent.change(input, { target: { value: book.title } })
    });
});
