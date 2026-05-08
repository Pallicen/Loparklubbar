using Microsoft.AspNetCore.Mvc;
using backend.DTO;
using backend.Repositories;
using backend.DB;
using backend.Models;

namespace backend.Service;

public class EventService : IEventService
{
  private readonly AppDbContext _context;

  public EventService(AppDbContext context)
  {
    _context = context;
  }

       public void Add(Event @event)
  {
    _context.Events.Add(@event);
    _context.SaveChanges();
  }

  public EventDto? GetEventById(int id)
  {
    var foundEvent = _context.Events.FirstOrDefault(x => x.Id == id);

        if (foundEvent == null)
            return null;
            
      return new EventDto 
      {
        Id = foundEvent.Id,
        Title = foundEvent.Title, 
        Description = foundEvent.Description, 
        EventLink= foundEvent.EventLink
        };
    }

}