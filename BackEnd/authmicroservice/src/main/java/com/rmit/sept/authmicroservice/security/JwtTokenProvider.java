package com.rmit.sept.authmicroservice.security;

import com.rmit.sept.authmicroservice.model.Role;
import com.rmit.sept.authmicroservice.model.User;
import io.jsonwebtoken.*;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Component
public class JwtTokenProvider {

    // GENERATE JWT
    public String generateToken(Authentication authentication){
        User user = (User)authentication.getPrincipal();
        Date now = new Date(System.currentTimeMillis());

        Date expiryDate = new Date(now.getTime()+ SecurityConstant.EXPIRATION_TIME);

        String userId = Long.toString(user.getId());

        Map<String,Object> claims = new HashMap<>();
        claims.put("id", (Long.toString(user.getId())));
        claims.put("username", user.getUsername());
        claims.put("fullName", user.getFullName());
        for (Role role : user.getRoles()) {claims.put("role", role.getName());}

        return Jwts.builder()
                .setSubject(userId)
                .setClaims(claims)
                .setIssuedAt(now)
                .setExpiration(expiryDate)
                .signWith(SignatureAlgorithm.HS512, SecurityConstant.SECRET)
                .compact();
    }

    // VALIDATE JWT
    public boolean validateToken(String token){
        System.out.println("authmicroservice.JwtTokenProvider.validateToken()");
        try {
            Jwts.parser().setSigningKey(SecurityConstant.SECRET).parseClaimsJws(token);
            return true;
        }
        catch (SignatureException ex) {
            System.out.println("Invalid JWT Signature");
        }
        catch (MalformedJwtException ex) {
            System.out.println("Invalid JWT Token");
        }
        catch (ExpiredJwtException ex) {
            System.out.println("Expired JWT token");
        }
        catch (UnsupportedJwtException ex) {
            System.out.println("Unsupported JWT token");
        }
        catch (IllegalArgumentException ex) {
            System.out.println("JWT claims string is empty");
        }
        return false;
    }


    // GET USER ID FROM JWT
    public Long getUserIdFromJWT(String token){
        System.out.println("authmicroservice.JwtTokenProvider.getUserIdfromJWT()");
        Claims claims = Jwts.parser().setSigningKey(SecurityConstant.SECRET).parseClaimsJws(token).getBody();
        String id = (String) claims.get("id");

        return Long.parseLong(id);
    }
}

