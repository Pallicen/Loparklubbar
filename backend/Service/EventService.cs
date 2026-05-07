using Microsoft.AspNetCore.Mvc;
using backend.DTO;
using backend.Repositories;

namespace backend.Service;

public class EventService : IEventService
{
  private readonly IEventRepository _eventRepository;

  public EventService(IEventRepository eventRepository)
  {
    _eventRepository = eventRepository;
  }

  public EventDto GetEventById(int id)
  {
    var foundEvent = _eventRepository.GetById(id);
    return new EventDto 
    {
      Id = foundEvent.Id,
      Title = foundEvent.Title, 
      Description = foundEvent.Description, 
      EventLink= foundEvent.EventLink
      };
  }

}
