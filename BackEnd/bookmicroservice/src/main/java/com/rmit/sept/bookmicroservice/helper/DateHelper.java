package com.rmit.sept.bookmicroservice.helper;

import java.text.ParseException;
import java.util.Date;
import java.text.SimpleDateFormat;

public class DateHelper {

    static SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd");

    public static Date jsonToDate(String dateString) {
        Date date = new Date();

        try {
            date = df.parse(dateString);
        }
        catch (ParseException e) {
            e.printStackTrace();
        }
        return date;
    }

    public static String dateToJson(Date date) {
        String dateString = df.format(date);
        return dateString.substring(0, 10);
    }

}
