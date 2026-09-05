package com.college.common.events;

public final class Topics {
    private Topics() {}

    public static final String USER_CREATED = "college.auth.user-created";
    public static final String USER_ROLE_CHANGED = "college.auth.user-role-changed";
    public static final String ENQUIRY_SUBMITTED = "college.admission.enquiry-submitted";
    public static final String APPLICATION_STATUS_CHANGED = "college.admission.application-status-changed";
    public static final String RESULT_PUBLISHED = "college.academic.result-published";
    public static final String ATTENDANCE_MARKED = "college.attendance.marked";
    public static final String NOTICE_PUBLISHED = "college.cms.notice-published";
    public static final String SEND_EMAIL = "college.notification.send-email";
    public static final String SEND_WHATSAPP = "college.notification.send-whatsapp";
    public static final String AUDIT_ACTION = "college.audit.action-logged";
}
