// package com.rmit.sept.bookmicroservice;

// import com.fasterxml.jackson.databind.ObjectMapper;
// import com.rmit.sept.bookmicroservice.model.Book;
// import com.rmit.sept.bookmicroservice.repository.BookRepository;
// import com.rmit.sept.bookmicroservice.web.BookController;
// import org.junit.jupiter.api.Test;
// import org.mockito.Mockito;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
// import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
// import org.springframework.boot.test.context.SpringBootTest;
// import org.springframework.boot.test.mock.mockito.MockBean;
// import org.springframework.http.MediaType;
// import org.springframework.test.web.servlet.MockMvc;
// import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;
// import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

// import java.time.LocalDateTime;
// import java.util.Date;

// import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
// import static org.hamcrest.Matchers.*;

// @SpringBootTest
// @AutoConfigureMockMvc
// public class BookControllerTest {
//     @Autowired
//     MockMvc mockMvc;
//     @Autowired
//     ObjectMapper mapper;

//     @MockBean
//     BookRepository bookRepository;

//     @Test
//     public void createBook_success() throws Exception {
//         MockHttpServletRequestBuilder mockRequest = MockMvcRequestBuilders.post("/api/book/new")
//                 .contentType(MediaType.APPLICATION_JSON)
//                 .accept(MediaType.APPLICATION_JSON)
//                 .content("{\"isbn\": \"5\"," +
//                         "\"title\": \"2\", " +
//                         "\"author\": \"3\"," +
//                         "\"genre\": \"1\"," +
//                         "\"type\": \"NEW\"," +
//                         "\"price\": \"1\"," +
//                         "\"publisher\": \"1\"," +
//                         "\"publicationDate\": \"2020-08-02T23:58:22.702+00:00\"," +
//                         "\"tagline\": \"1\"," +
//                         "\"tableOfContents\": \"1\"," +
//                         "\"blurb\": \"1\"}");

//         mockMvc.perform(mockRequest)
//                 .andExpect(status().is2xxSuccessful())
//                 .andExpect(jsonPath("$", notNullValue()))
//                 .andExpect(jsonPath("$.title", is("2")));
//     }

//    @Test
//    public void getBookbySearch_success() throws Exception {
//        mockMvc.perform(MockMvcRequestBuilders
//                .get("/api/book/search/5")
//                .contentType(MediaType.APPLICATION_JSON))
//                .andExpect(status().isOk())
//                .andExpect(jsonPath("$", notNullValue()))
//                .andExpect(jsonPath("$.title", is("2")));
//     }
// }
