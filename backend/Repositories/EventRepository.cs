using Microsoft.AspNetCore.Mvc;
using backend.Models;

namespace backend.Repositories;

public class EventRepository : IEventRepository
{
    private static readonly List<Event> Events =
    [
        new Event
        {
            Id = 1,
            Title = "Stockholm Marathon",
            Description = "Löpning genom Stockholm.",
            EventLink = "https://example.com/stockholm-marathon"
        }
    ];

    public Event GetById(int id)
    {
        return Events.FirstOrDefault(e => e.Id == id) ?? new Event();
    }
}
