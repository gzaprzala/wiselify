package pl.wiselify.backend.security.jwt;

import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import io.jsonwebtoken.security.SignatureException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseCookie;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;
import org.springframework.web.util.WebUtils;
import pl.wiselify.backend.services.UserDetailsImpl;

import java.security.Key;
import java.util.Date;

@Component
public class JwtUtils {
  private static final Logger logger = LoggerFactory.getLogger(JwtUtils.class);

  @Value("${wiselify.pl.jwtSecret}")
  private String jwtSecret;

  @Value("${wiselify.pl.jwtExpirationMs}")
  private int jwtExpirationMs;

  @Value("${wiselify.pl.jwtCookieName}")
  private String jwtCookie;

  private Key secretKey = Keys.secretKeyFor(SignatureAlgorithm.HS512);

  public String getJwtFromCookies(HttpServletRequest request) {
    Cookie cookie = WebUtils.getCookie(request, jwtCookie);
    if (cookie != null) {
      return cookie.getValue();
    } else {
      return null;
    }
  }

  public ResponseCookie generateJwtCookie(UserDetailsImpl userPrincipal) {
    String jwt = generateTokenFromUsername(userPrincipal.getUsername());
    ResponseCookie cookie = ResponseCookie.from(jwtCookie, jwt).path("/api").maxAge(24 * 60 * 60).httpOnly(true).build();
    return cookie;
  }

  public ResponseCookie getCleanJwtCookie() {
    ResponseCookie cookie = ResponseCookie.from(jwtCookie, null).path("/api").build();
    return cookie;
  }

  public String getUserNameFromJwtToken(String token) {
    return Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token).getBody().getSubject();
  }

  public boolean validateJwtToken(String authToken) {
    try {
      Jwts.parser().setSigningKey(secretKey).parseClaimsJws(authToken);
      return true;
    } catch (SignatureException e) {
      logger.error("Bledna sygnatura JWT: {}", e.getMessage());
    } catch (MalformedJwtException e) {
      logger.error("Bledny token JWT: {}", e.getMessage());
    } catch (ExpiredJwtException e) {
      logger.error("Token JWT wygasl: {}", e.getMessage());
    } catch (UnsupportedJwtException e) {
      logger.error("Token JWT nie jest wspierany: {}", e.getMessage());
    } catch (IllegalArgumentException e) {
      logger.error("Token JWT jest pusty: {}", e.getMessage());
    }

    return false;
  }

  public String generateTokenFromUsername(String username) {
    return Jwts.builder()
            .setSubject(username)
            .setIssuedAt(new Date())
            .setExpiration(new Date((new Date()).getTime() + jwtExpirationMs))
            .signWith(secretKey)
            .compact();
  }
}
