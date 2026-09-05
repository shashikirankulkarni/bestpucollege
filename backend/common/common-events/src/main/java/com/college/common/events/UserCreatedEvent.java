package com.college.common.events;

import java.util.List;

public class UserCreatedEvent extends BaseEvent {
    private final String userId;
    private final String email;
    private final List<String> roles;

    public UserCreatedEvent(String userId, String email, List<String> roles) {
        super("USER_CREATED", "auth-service");
        this.userId = userId;
        this.email = email;
        this.roles = roles;
    }

    public String getUserId() { return userId; }
    public String getEmail() { return email; }
    public List<String> getRoles() { return roles; }
}
