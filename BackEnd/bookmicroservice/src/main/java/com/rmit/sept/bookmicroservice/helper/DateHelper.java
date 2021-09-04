package com.rmit.sept.bookmicroservice.helper;

import java.text.ParseException;
import java.util.Date;
import java.text.SimpleDateFormat;

public class DateHelper {
    
    public static Date stringToDate(String dateString) {
        Date date = new Date();
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd");

        try {
            date = df.parse(dateString);
        }
        catch (ParseException e) {
            e.printStackTrace();
        }
        return date;
    }
    
}
