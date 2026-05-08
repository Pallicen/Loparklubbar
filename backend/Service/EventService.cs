using backend.DTO;
using backend.Models;
using backend.Repositories;

namespace backend.Service;

public class EventService : IEventService
{
  private readonly IEventRepository _eventRepository;

  public EventService(IEventRepository eventRepository)
  {
    _eventRepository = eventRepository;
  }

  public EventDto? GetEventById(int id)
  {
    var foundEvent = _eventRepository.GetById(id);
    if (foundEvent is null)
    {
      return null;
    }

    return new EventDto 
    {
      Id = foundEvent.Id,
      Title = foundEvent.Title, 
      Description = foundEvent.Description, 
      EventLink= foundEvent.EventLink
    };
  }

  public EventDto CreateEvent(EventDto eventDto)
  {
    var createdEvent = _eventRepository.Add(new Event
    {
      Title = eventDto.Title,
      Description = eventDto.Description,
      EventLink = eventDto.EventLink
    });

    return new EventDto
    {
      Id = createdEvent.Id,
      Title = createdEvent.Title,
      Description = createdEvent.Description,
      EventLink = createdEvent.EventLink
    };
  }

}
