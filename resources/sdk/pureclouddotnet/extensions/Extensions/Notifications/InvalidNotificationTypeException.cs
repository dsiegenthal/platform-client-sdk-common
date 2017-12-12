using System;

namespace {{=it.packageName}}.Extensions.Notifications
{
    public class InvalidNotificationTypeException : Exception
    {
        public override string Message { get; }

        private InvalidNotificationTypeException()
        {
        }

        public InvalidNotificationTypeException(Type type)
        {
            Message = $"Invalid notification type: {type}. Notification type must implement INotificationData";
        }
    }
}