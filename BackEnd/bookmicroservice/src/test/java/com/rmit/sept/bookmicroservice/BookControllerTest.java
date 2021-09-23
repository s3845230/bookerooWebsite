package com.rmit.sept.bookmicroservice;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.rmit.sept.bookmicroservice.helper.Base64Helper;
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

    //Dummy variables for testing
    Date date = new Date();
    String data = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOgAAADoCAYAAADlqah4AAAABHNCSVQICAgIfAhkiAAADg1JREFUeF7tncF2HAcIBKX//2hHydmZes8VAiOVr2xD09DDamWvP399/fnoTwqkwEkFPjPoyblEKgX+USCDtggpcFiBDHp4OFFLgQzaDqTAYQUy6OHhRC0FMmg7kAKHFcigh4cTtRTIoO1AChxWIIMeHk7UUiCDtgMpcFiBDHp4OFFLgQzaDqTAYQUy6OHhRC0FMmg7kAKHFcigh4cTtRTIoO1AChxWIIMeHk7UUiCDtgMpcFiBDHp4OFFLgQzaDqTAYQUy6OHhRC0FMmg7kAKHFcigh4cTtRTIoO1AChxWIIMeHk7UUiCDtgMpcFiBDHp4OFFLgQzaDqTAYQUy6OHhRC0FMmg7kAKHFcigh4cTtRRYN+jn5+e3nsL2f79q9SX+Nv/14VP/0/wz6LDC6wOWD0Din0FnFyiDzur7QQs+XP7DGoj42/zT/dv81L/NT/gMSgrJ+PqAu6Bqguvz+yLwS3UgwT2BpYAAt/rSetj8s9377NS/r/CcoQs6rPD6gLugasLr8+uCqvkheH3AGRRn9PSC9fllUDU/BK8POIPijDLogwL0M8z2gtN0p/lTfuJH+lH+aTzxn47b/sf5Xb+gtCDTAlH+6QFTfuJH+lH+aTzxn47b/sf5ZVAn8fSAKT+xnzYY8aP6xH86fp3/+U9xf/qAaYFogUk/yj+NJ/7Tcdv/OL8uqJN4esCUn9hPG4z4UX3iPx2/zr8LKjdgesCUn+iTQSj/NJ74T8dt/+P8uqBO4ukBU35iP20w4kf1if90/Dr/LqjcgOkBU36iTwah/NN44j8dt/2P83v7BSWBrYDTC0r8bX3qn/ITfps/8aP+LH+qb+Ovv6AksBVoesDE39an/ik/4bf5Ez/qz/Kn+jaeQUHB6QHbBSE8LQj1R3iqT/kJT/UpbusTnurbeAbNoGqHyGC04IRX5L7Atj7hLT/CZ9AMSjvyGCeD0YITXpHLoFa+D/xKju8+YFrQ6f4pP014mz/xo/4sf6pv413QLqjaIbvghFfkuqBWvi4oLai9ADQhyk/4bf7Ej/qz/Km+jXdBf/gFpQWaXnAyCPGj+DR/qm/jGTSDPiowveAZ9HkBM2gGzaAPCtADyl5IwmfQDJpBM+i/K0BvcegJRnh6QlHc1t/GU38Uj//q10Z/dEG7oF3QLmgX9N8UoHcA9oLRhaS4rW/xxI/itj7hqb6Nd0G7oF3QLmgXtAv6ewXoHYS9QHQBqT7hLT/Cd0G7oF3QLmgXtAvaBaVr+bt4F7QL2gXtgnZBu6Bd0C7onyjQBe2CdkG7oF3QLuif3I9+Bu2CdkG7oHMX9E+eSv8lxv4ezeJtL7a+xVv+Fn+d/+svqB2QxdsBW/xP57/dv61P+AxKCkHcGsziJf3xL23b/ps4pM+2/sjvS8DVf09zXSAU8PNz9Wc44kdxq7/FE7/p+HX+XVC5AXbAFi/pd0HlA9bqT/gMSgr1FvdRge0HjByffkDZ+oTPoKRQBs2gckcMPIMa9b6w9oJYvKT/ev7b/dv6hD9vUGrgepw+g7MGvY6/Ph/iR/MjvI1nUKsg4GnA1w1m+Q/LO56e+p8mkEGHFaYBZ9DhAcj0ND+ZHuEZFCVyL6ABZ1Cn7zSa5jddP4MOK0wDzqDDA5DpaX4yPcIzKErkXkADzqBO32k0zW+6fgYdVpgGnEGHByDT0/xkeoRnUJTIvYAGnEGdvtNomt90/XWDTjd4Pf+0QW3/2wtq+b8dn0GXJ5hBlwdwvHwGXR5QBl0ewPHyGXR5QBl0eQDHy2fQ5QFl0OUBHC+fQZcHlEGXB3C8fAZdHlAGXR7A8fIZdHlAGXR5AMfLrxv0+oLa+dnfI5I+xI/qU36LJ37TceI/Xd/mz6BWQcDbBSEDEX2qT/ktnvhNx4n/dH2bP4NaBTPosIIufQZ1+o1/J46kp+F2QejCEUGqT/ktnvhNx4n/dH2bvwtqFeyCDivo0mdQp18XFPSjC0fy04JSfosnftNx4j9d3+bvgloFu6DDCrr0GdTp1wXtgsoNeoZn0FF5/RdDEz37Fm87P9WnOPVP+O24NSD1b/Nbfdbf4lID0wK+PT/pR3Hqn/DbcWsg6t/mt/pk0OH/3er8AkD/dsGm8dZA5+fz1eDq/w9KA5wW8O35ST+KU/+E347b9aX+bX6rTxe0C2p3aBVvDZRB5fimBXx7fikvfopu80/jM+i0wvLXDNcHNP0AsOMhfjb/NP76/G3/vcXtLa7doVV8Bh2Wn57gNADCE33KT/jp+jY/8Z/u3+Yn/t89vn5BaQFpwISnAVJ+wk/Xt/mJ/3T/Nj/x/+7xDCp/y2QNRAts89MCU33CEz+bn+p/93gGzaBqxzOokg/BGTSD4pI8vSCDKvkQnEEzKC5JBlUSKXAGzaBugYZ/TaXIfQNwBs2gao17i6vkQ/B5g2IH8gXTnzLSAkv6H9v8t+tf18/yy6DygtIAMigp9Bx/u36u+68vLNj+52bTAyCBugDOIOlHG+biGbQL+rhB9ADNoM6AhM6gGTSDkksW4xk0g2bQRQNS6QyaQTMouWQxnkEzaAZdNCCVXjcoEnz5t85Rf9tx+yGP/RDJ4kk/yk94qw/lp3gGJYW+edwuIBmA8ls8jYfyE574E97GM6hV8OV4u4BkAMpv8SQ/5Sc88Se8jWdQq+DL8XYByQCU3+JJfspPeOJPeBvPoFbBl+PtApIBKL/Fk/yUn/DEn/A2nkGtgi/H2wUkA1B+iyf5KT/hiT/hbTyDWgVfjrcLSAag/BZP8lN+whN/wtt4BrUKvhxvF5AMQPktnuSn/IQn/oS38fMGtQ1ex9MC0YJM46/rR/oQf6sf5bfxDGoVlHi7INN42d44PIOOS/yzC0wbjBaY6l+fDvVH/Kl/m5/qU7wLSgoNx+2CTOOH29fprYGsfroBSJBBpxWmAchvxbMLRvhlebB8BkWJeoFRgAxCCziNN739H1jShzhY/Si/jXdBrYISbxdkGi/bG4dn0HGJf3aBaYPRAlP969Oh/og/9W/zU32Kr19QEogauB6fHjDpR/UJb/Wl+pT/Oj/ib+MZ1CoIeLugRI8WmOoTnupTnOoT/jo/4m/jGdQqmEEfFcigbsEyqNMP0XZBqQBdGKpPeKpPcapP+Ov8iL+NZ1CrYBe0Czq4Qxl0UNy/U9sLQvTowlB9wlN9ilN9wl/nR/xtPINaBbugXdDBHcqgg+J2Qf07iC6ofQ8iF5wGsEwPu7P8LR4JyhdYfoSX9BB+fX+ogfMX9LrAtIDE3+JpwDZu+RHe8iM86U/47XgGlROgBaQFsXhJH+GWH+GRgHwB6S/Tj8MzqJSYFpAWxOIlfYRbfoRHAvIFpL9MPw7PoFJiWkBaEIuX9BFu+REeCcgXkP4y/Tg8g0qJaQFpQSxe0ke45Ud4JCBfQPrL9OPwDColpgWkBbF4SR/hlh/hkYB8Aekv04/DM6iUmBaQFsTiJX2EW36ERwLyBaS/TD8Of71BpxeABkz1LZ42wOYnPNWn/glv61P+6/yQ/5dAv+hFk3ESkOgR3nK39S2e+Nv8hKf6Vn9b/+38kH8GfZaIFogW1OJpgDY/4ak+9U94W5/yX+eH/DNoBqUleYpfN8B1fqR9P4OCQvSEpwWweBqgzU94qk/9E97Wp/zX+SH/LmgXlJakC2oUctguaBdUbdD1C3WdH4mfQTMo7chj/LoBrvMj8TPocYNO/4xGCzIdtwYifm/XL4NmUNrx0XgGfZY3g2bQUQNS8gyaQWlHHuP0FokWbBqvmjsAJv0sRdLf5p/Gd0G7oNM7NvohE5HPoKQQxOkJSgITXtLD77Wl+pY/4W1/23jSz/J7u35d0C6o9YDCZ9B+BlULRE9gWrBpvGruAJj0sxRJf5t/Gt8FPX5BaQFoAa0BbH7CU3/T/Kn+djyDZtDVT7HJABnUPuJI4T4kGv0Uk8Y3veCUn/jR+lB+wtv6lH863gXtgnZBp10m8mfQDJpBhYGmoRk0g2bQaZeJ/Bk0g2ZQYaBpaAbNoBl02mUi/+sNKnr/T6D0KaP9FHE6P4kwXd/mt3jqfzueQeUEphdkOj+1P13f5rd46n87nkHlBKYXZDo/tT9d3+a3eOp/O55B5QSmF2Q6P7U/Xd/mt3jqfzueQeUEphdkOj+1P13f5rd46n87nkHlBKYXZDo/tT9d3+a3eOp/O55B5QSmF2Q6P7U/Xd/mt3jqfzueQeUEphdkOj+1P13f5rd46n87ft6g2wLZ+vR7UFowqk/5CW/rU37iR/UJT/Wn81N9G8+gVkHA04LRAhE9yk94W5/yEz+qT3iqP52f6tt4BrUKZtBHBchg0waazj+8Ph8ZdFhhu6BEj/ITnhaY8BQnflSf8FR/Oj/Vt/EMahXsgnZBB3cogw6K+3dqugD0hCd6lJ/wtj7lJ35Un/BUfzo/1bfxDGoV7IJ2QQd3KIMOitsF9e8guqBWgeEFL30K/GQF1i/oTxa/3lOAFMigpFDxFFhUIIMuil/pFCAFMigpVDwFFhXIoIviVzoFSIEMSgoVT4FFBTLooviVTgFSIIOSQsVTYFGBDLoofqVTgBTIoKRQ8RRYVCCDLopf6RQgBTIoKVQ8BRYVyKCL4lc6BUiBDEoKFU+BRQUy6KL4lU4BUiCDkkLFU2BRgQy6KH6lU4AUyKCkUPEUWFQggy6KX+kUIAUyKClUPAUWFcigi+JXOgVIgQxKChVPgUUFMuii+JVOAVIgg5JCxVNgUYEMuih+pVOAFMigpFDxFFhUIIMuil/pFCAFMigpVDwFFhXIoIviVzoFSIEMSgoVT4FFBTLooviVTgFS4C/MTB4bBccb2QAAAABJRU5ErkJggg==";

    //Dummy book for testing
    Book book1 = new Book(Long.valueOf(1),
            "isbn",
            "title",
            "author",
            "genre",
            "type",
            "bookSeller",
            5.0,
            "publisher",
            date,
            "tagline",
            "tableOfContents",
            "blurb",
            Base64Helper.base64ToDataType(data),
            Base64Helper.base64ToByteStream(data),
            date,
            date,
            data);

     @MockBean
     BookRepository bookRepository;

    @Test
    public void createBook_success() throws Exception {

        //intercept from entering database
        Mockito.when(bookRepository.save(book1)).thenReturn(book1);

        //create mock api post request
        MockHttpServletRequestBuilder mockPostRequest = MockMvcRequestBuilders.post("/api/book/new")
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON)
                .content("{\"isbn\": \"isbn\"," +
                        "\"title\": \"title\", " +
                        "\"author\": \"author\"," +
                        "\"genre\": \"genre\"," +
                        "\"type\": \"NEW\"," +
                        "\"bookSeller\": \"bookSeller\"," +
                        "\"price\": \"1\"," +
                        "\"publisher\": \"1\"," +
                        "\"publicationDate\": \"2020-08-02T23:58:22.702+00:00\"," +
                        "\"tagline\": \"1\"," +
                        "\"tableOfContents\": \"1\"," +
                        "\"blurb\": \"1\"," +
                        "\"imageData\": \"data:image/png;base64,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\"," +
                        "\"created_at\": \"2020-08-02T23:58:22.702+00:00\"," +
                        "\"updated_at\": \"2020-08-02T23:58:22.702+00:00\"" +
                        "}");

        //perform request and check title is correct
        mockMvc.perform(mockPostRequest)
                .andExpect(status().is2xxSuccessful())
                .andExpect(jsonPath("$", notNullValue()))
                .andExpect(jsonPath("$.title", is("title")));
    }

    @Test
    public void getBookbySearch_success() throws Exception {
        List<Book> records = new ArrayList<>(Arrays.asList(book1));

        //intercept from reaching database
        Mockito.when(bookRepository.findByIsbnContainingIgnoreCase(book1.getIsbn())).thenReturn(records);

        //mock get request and check title is correct
        mockMvc.perform(MockMvcRequestBuilders
                .get("/api/book/search/isbn")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().is2xxSuccessful())
                .andExpect(jsonPath("$", hasSize(1)))
                .andExpect(jsonPath("$[0].title", is("title")));
    }
}
