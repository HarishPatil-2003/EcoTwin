package com.ecotwin.config;
import org.springframework.context.annotation.*;import org.springframework.security.config.annotation.web.builders.HttpSecurity;import org.springframework.security.web.SecurityFilterChain;
@Configuration public class SecurityConfig {@Bean SecurityFilterChain filterChain(HttpSecurity http)throws Exception{return http.csrf(c->c.disable()).cors(c->{}).authorizeHttpRequests(a->a.requestMatchers("/actuator/**","/api/**").permitAll().anyRequest().permitAll()).build();}}
