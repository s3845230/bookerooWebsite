package com.rmit.sept.bookmicroservice.helper;

import javax.xml.bind.DatatypeConverter;

public class Base64Helper {
    
    public static String base64toDataType(String data) {
        String[] dataSplit = data.split(",");
        return dataSplit[0];
    }
    
    public static byte[] base64toByteStream(String data) {
        String[] dataSplit = data.split(",");
        return DatatypeConverter.parseBase64Binary(dataSplit[1]);
    }
}
