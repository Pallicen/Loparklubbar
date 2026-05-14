
using backend.DTO;
using backend.Service;

namespace backend.Service;

public interface IEventService
{
    IEnumerable<EventDto> GetAllEvents();
    EventDto? GetEventById(int id);
    EventDto Add(EventDto dto);
}