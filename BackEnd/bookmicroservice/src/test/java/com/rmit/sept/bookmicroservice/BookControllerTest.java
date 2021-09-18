package com.rmit.sept.bookmicroservice;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.rmit.sept.bookmicroservice.model.Book;
import com.rmit.sept.bookmicroservice.repository.BookRepository;
import com.rmit.sept.bookmicroservice.web.BookController;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static org.hamcrest.Matchers.*;

@SpringBootTest
@AutoConfigureMockMvc
public class BookControllerTest {
    @Autowired
    MockMvc mockMvc;
    @Autowired
    ObjectMapper mapper;
    Date date = new Date();
    Book book1 = new Book(Long.valueOf(1),
            "isbn",
            "title",
            "author",
            "genre",
            "type",
            5.0,
            "publisher",
            date,
            "tagline",
            "tableOfContents",
            "blurb",
//            "imageType",
//            "imageBlob".getBytes(),
            date,
            date);

    @MockBean
    BookRepository bookRepository;

    @Test
    public void createBook_success() throws Exception {
//        Book book = Book.builder()
//            .isbn("isbn")
//            .title("title")
//            .author("author")
//            .genre("genre")
//            .type("type")
//            .price(5.0)
//            .publisher("publisher")
//            .publicationDate(date)
//            .tagline("tagline")
//            .tableOfContents("tableOfContents")
//            .blurb("blurb")
//            .imageType("imageType")
//            .imageBlob("imageBlob".getBytes())
//            .created_at(date)
//            .updated_at(date)
//            .build();

        Mockito.when(bookRepository.save(book1)).thenReturn(book1);

        MockHttpServletRequestBuilder mockPostRequest = MockMvcRequestBuilders.post("/api/book/new")
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON)
                .content(this.mapper.writeValueAsString(book1));

        mockMvc.perform(mockPostRequest)
                .andExpect(status().is2xxSuccessful())
                .andExpect(jsonPath("$", notNullValue()))
                .andExpect(jsonPath("$.title", is("title")));
    }

    @Test
    public void getBookbySearch_success() throws Exception {
        List<Book> records = new ArrayList<>(Arrays.asList(book1));

        Mockito.when(bookRepository.findByIsbnContaining(book1.getIsbn())).thenReturn(records);

        mockMvc.perform(MockMvcRequestBuilders
                .get("/api/book/search/isbn")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().is2xxSuccessful())
                .andExpect(jsonPath("$", hasSize(1)))
                .andExpect(jsonPath("$[0].title", is("title")));
    }
}
