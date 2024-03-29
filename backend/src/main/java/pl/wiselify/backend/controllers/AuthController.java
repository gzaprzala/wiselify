package pl.wiselify.backend.controllers;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import pl.wiselify.backend.models.Achievement;
import pl.wiselify.backend.models.ERole;
import pl.wiselify.backend.models.Role;
import pl.wiselify.backend.models.User;
import pl.wiselify.backend.models.request.EmailChangeRequest;
import pl.wiselify.backend.models.request.LoginRequest;
import pl.wiselify.backend.models.request.PasswordChangeRequest;
import pl.wiselify.backend.models.request.SignupRequest;
import pl.wiselify.backend.models.response.MessageResponse;
import pl.wiselify.backend.models.response.UserInfoResponse;
import pl.wiselify.backend.repositories.AchievementRepository;
import pl.wiselify.backend.repositories.RoleRepository;
import pl.wiselify.backend.repositories.UserRepository;
import pl.wiselify.backend.security.jwt.JwtUtils;
import pl.wiselify.backend.services.UserDetailsImpl;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class AuthController {
  @Autowired
  AuthenticationManager authenticationManager;

  @Autowired
  UserRepository userRepository;

  @Autowired
  RoleRepository roleRepository;

  @Autowired
  AchievementRepository achievementRepository;


  @Autowired
  PasswordEncoder encoder;

  @Autowired
  JwtUtils jwtUtils;

  @PostMapping("/signin")
  public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {

    Authentication authentication = authenticationManager
            .authenticate(new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

    SecurityContextHolder.getContext().setAuthentication(authentication);

    UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();

    ResponseCookie jwtCookie = jwtUtils.generateJwtCookie(userDetails);

    List<String> roles = userDetails.getAuthorities().stream()
            .map(GrantedAuthority::getAuthority)
            .collect(Collectors.toList());

    User user = userRepository.findById(userDetails.getId()).orElseThrow(() -> new RuntimeException("Nie znaleziono uzytkownika"));

    Achievement achievements = user.getAchievements();
    achievements.setLoginCount(achievements.getLoginCount() + 1);
    achievementRepository.save(achievements);

    return ResponseEntity.ok().header(HttpHeaders.SET_COOKIE, jwtCookie.toString())
            .body(new UserInfoResponse(userDetails.getId(),
                    userDetails.getUsername(),
                    userDetails.getEmail(),
                    roles));
  }

  @PostMapping("/signup")
  public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest) {
    if (userRepository.existsByUsername(signUpRequest.getUsername())) {
      return ResponseEntity.badRequest().body(new MessageResponse("Podana nazwa uzytkownika jest juz uzywana"));
    }

    if (userRepository.existsByEmail(signUpRequest.getEmail())) {
      return ResponseEntity.badRequest().body(new MessageResponse("Podany email jest juz przez kogos uzywany"));
    }

    User user = new User(signUpRequest.getUsername(),
            signUpRequest.getEmail(),
            encoder.encode(signUpRequest.getPassword()));

    Set<String> strRoles = signUpRequest.getRole();
    Set<Role> roles = new HashSet<>();

    if (strRoles == null) {
      Role userRole = roleRepository.findByName(ERole.ROLE_USER)
              .orElseThrow(() -> new RuntimeException("Nie znaleziono roli: USER"));
      roles.add(userRole);
    } else {
      strRoles.forEach(role -> {
        switch (role) {
          case "admin" -> {
            Role adminRole = roleRepository.findByName(ERole.ROLE_ADMIN)
                    .orElseThrow(() -> new RuntimeException("Nie znaleziono roli: ADMIN"));
            roles.add(adminRole);
          }
          case "mod" -> {
            Role modRole = roleRepository.findByName(ERole.ROLE_MODERATOR)
                    .orElseThrow(() -> new RuntimeException("Nie znaleziono roli: MODERATOR"));
            roles.add(modRole);
          }
          default -> {
            Role userRole = roleRepository.findByName(ERole.ROLE_USER)
                    .orElseThrow(() -> new RuntimeException("Nie znaleziono roli: USER"));
            roles.add(userRole);
          }
        }
      });
    }

    user.setRoles(roles);
    userRepository.save(user);

    return ResponseEntity.ok(new MessageResponse("Pomyslnie zarejestrowano uzytkownika"));
  }

  @PostMapping("/signout")
  public ResponseEntity<?> logoutUser() {
    ResponseCookie cookie = jwtUtils.getCleanJwtCookie();
    return ResponseEntity.ok().header(HttpHeaders.SET_COOKIE, cookie.toString())
            .body(new MessageResponse("Pomyslnie wylogowano!"));
  }

  @PostMapping("/change-email/{userId}")
  public ResponseEntity<?> changeEmail(@Valid @RequestBody EmailChangeRequest emailChangeRequest, @PathVariable("userId") String userId) {

    User user = userRepository.findById(Long.valueOf(userId)).orElseThrow(() -> new RuntimeException("Nie znaleziono użytkownika"));

    user.setEmail(emailChangeRequest.getNewEmail());
    userRepository.save(user);

    return ResponseEntity.ok(new MessageResponse("Zmieniono email użytkownika"));
  }

  @PostMapping("/change-password/{userId}")
  public ResponseEntity<?> changePassword(@Valid @RequestBody PasswordChangeRequest passwordChangeRequest, @PathVariable("userId") String userId) {

    User user = userRepository.findById(Long.valueOf(userId)).orElseThrow(() -> new RuntimeException("Nie znaleziono użytkownika"));

    user.setPassword(encoder.encode(passwordChangeRequest.getNewPassword()));
    userRepository.save(user);

    return ResponseEntity.ok(new MessageResponse("Zmieniono hasło użytkownika"));
  }


}
