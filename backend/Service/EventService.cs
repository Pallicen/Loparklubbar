using Microsoft.AspNetCore.Mvc;
using backend.DTO;
using backend.Repositories;
using backend.DB;

namespace backend.Service;

public class EventService : IEventService
{
  private readonly AppDbContext _context;

  public EventService(AppDbContext context)
  {
    _context = context;
  }

  public EventDto GetEventById(int id)
  {
    var eventEntity = _context.Events.FirstOrDefault(x => x.Id == id);

        if (eventEntity == null)
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