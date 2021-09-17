package com.rmit.sept.bookmicroservice.helper;

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;

public class Base64HelperTest {

    String data = "data:image/png;base64,SEVMTE8K";

    @Test
    void base64ToDataTypeTest() {
        String dataType = "data:image/png;base64";
        assertEquals(dataType, Base64Helper.base64ToDataType(data));
    }
    
    @Test
    void byteStreamToJsonTest() {
        byte[] byteStream = Base64Helper.base64ToByteStream(data);
        String dataType = Base64Helper.base64ToDataType(data);

        String JSON = Base64Helper.byteStreamToJson(dataType, byteStream);
        assertEquals(data, JSON);
    }

}
