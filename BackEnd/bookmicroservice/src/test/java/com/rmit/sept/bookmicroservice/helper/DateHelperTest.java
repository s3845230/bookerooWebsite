package com.rmit.sept.bookmicroservice.helper;

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;

import java.text.ParseException;
import java.util.Date;
import java.text.SimpleDateFormat;


public class DateHelperTest {

    @Test
    void stringToDateTest() throws ParseException {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd");
        String dateString = "2021-01-01";
        Date date = df.parse(dateString);
        
        assertEquals(date, DateHelper.stringToDate(dateString));
    }

}
