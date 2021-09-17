package com.rmit.sept.bookmicroservice.helper;

import java.util.Base64;

public class Base64Helper {
    
    public static String base64ToDataType(String data) {
        String[] dataSplit = data.split(",");
        return dataSplit[0];
    }
    
    public static byte[] base64ToByteStream(String data) {
        String[] dataSplit = data.split(",");
        byte[] byteStream = Base64.getDecoder().decode(dataSplit[1]);
        System.out.println(byteStream);
        return byteStream;
    }
    
    public static String byteStreamToJson(String dataType, byte[] data) {
        String Json = dataType + "," + new String(Base64.getEncoder().encode(data));
        System.out.println(Json);
        return Json;
    }
}
