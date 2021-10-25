package com.rmit.sept.authmicroservice.security;

// Pre-defined values for all security classes
public class SecurityConstant {
    public static final String AUTH_URL = "/api/auth/**";
    public static final String H2_URL = "/h2-console/**";
    public static final String FRONT_END_URL = "http://localhost:3000";
//    public static final String FRONT_END_URL = "http://bookeroo-balancer-2011454518.ap-southeast-2.elb.amazonaws.com";
    public static final String SECRET ="SecretKeyToGenJWTs";
    public static final String TOKEN_PREFIX= "Bearer ";
    public static final String HEADER_STRING = "Authorization";
    public static final long EXPIRATION_TIME = 900_000; // 15 MINUTES
}
