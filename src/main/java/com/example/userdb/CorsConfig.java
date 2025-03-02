package com.example.userdb;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig {
    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")  // 🔹 Salli kaikki reitit
                        .allowedOrigins("http://localhost:3000")  // 🔹 Salli Next.js-frontend
                        .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")  // 🔹 Sallitut HTTP-metodit
                        .allowedHeaders("*")  // 🔹 Salli kaikki otsikot
                        .allowCredentials(true);  // 🔹 Salli evästeet & tunnisteet
            }
        };
    }
}
