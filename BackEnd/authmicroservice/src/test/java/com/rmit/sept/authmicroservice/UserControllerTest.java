package com.rmit.sept.authmicroservice;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.rmit.sept.authmicroservice.model.Role;
import com.rmit.sept.authmicroservice.model.User;
import com.rmit.sept.authmicroservice.repository.UserRepository;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import java.util.*;

import static org.hamcrest.Matchers.*;
import static org.hamcrest.Matchers.is;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
public class UserControllerTest {
    @Autowired
    MockMvc mockMvc;
    @Autowired
    ObjectMapper mapper;

    //Dummy variables for testing
    Date date = new Date();

    //Dummy book for testing
    User user1 = new User(Long.valueOf(1),
            "s3845230@student.rmit.edu.au",
            Role.AccountRole.PUBLISHER,
            "fullName",
            "password",
            true,
            date,
            date,
            "password",
            new Collection<GrantedAuthority>() {
                @Override
                public int size() {
                    return 0;
                }

                @Override
                public boolean isEmpty() {
                    return false;
                }

                @Override
                public boolean contains(Object o) {
                    return false;
                }

                @Override
                public Iterator<GrantedAuthority> iterator() {
                    return null;
                }

                @Override
                public Object[] toArray() {
                    return new Object[0];
                }

                @Override
                public <T> T[] toArray(T[] a) {
                    return null;
                }

                @Override
                public boolean add(GrantedAuthority grantedAuthority) {
                    return false;
                }

                @Override
                public boolean remove(Object o) {
                    return false;
                }

                @Override
                public boolean containsAll(Collection<?> c) {
                    return false;
                }

                @Override
                public boolean addAll(Collection<? extends GrantedAuthority> c) {
                    return false;
                }

                @Override
                public boolean removeAll(Collection<?> c) {
                    return false;
                }

                @Override
                public boolean retainAll(Collection<?> c) {
                    return false;
                }

                @Override
                public void clear() {

                }
            }
    );

    @MockBean
    UserRepository userRepository;

    @Test
    public void unapprovedUserList_success() throws Exception {
        List<User> unapprovedUsers = new ArrayList<>(Arrays.asList(user1));

        //intercept from reaching database
        Mockito.when(userRepository.findByApprovedContainingIgnoreCase("false")).thenReturn(unapprovedUsers);

        //mock get request and check title is correct
        mockMvc.perform(MockMvcRequestBuilders
                .get("/api/user/approval/unapprovedList")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().is2xxSuccessful())
                .andExpect(jsonPath("$", hasSize(1)))
                .andExpect(jsonPath("$[0].fullName", is("fullName")));
    }

    @Test
    public void approveUser_success() throws Exception {

        //intercept from entering database
        Mockito.when(userRepository.findById(user1.getId())).thenReturn(Optional.of(user1));
        Mockito.when(userRepository.save(user1)).thenReturn(user1);

        //create mock api post request
        MockHttpServletRequestBuilder mockPostRequest = MockMvcRequestBuilders.post("/api/user/approval/approveUser")
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON)
                .content("{\"id\": \"1\"}"); //requires testing after security is complete

        //perform request and check title is correct
        mockMvc.perform(mockPostRequest)
                .andExpect(status().is2xxSuccessful())
                .andExpect(jsonPath("$", notNullValue()))
                .andExpect(jsonPath("$.fullName", is("fullName")));
    }
}
