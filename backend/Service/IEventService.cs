
using backend.DTO;
using backend.Service;

namespace backend.Service;

public interface IEventService
{
  EventDto? GetEventById(int id);
  void Add(Models.Event @event);
  object GetAllEvents();
}