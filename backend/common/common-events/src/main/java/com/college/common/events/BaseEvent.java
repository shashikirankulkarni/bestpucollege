package com.college.common.events;

import java.time.Instant;
import java.util.UUID;

public abstract class BaseEvent {
    private final String eventId;
    private final String eventType;
    private final Instant timestamp;
    private final String source;

    protected BaseEvent(String eventType, String source) {
        this.eventId = UUID.randomUUID().toString();
        this.eventType = eventType;
        this.timestamp = Instant.now();
        this.source = source;
    }

    public String getEventId() { return eventId; }
    public String getEventType() { return eventType; }
    public Instant getTimestamp() { return timestamp; }
    public String getSource() { return source; }
}
