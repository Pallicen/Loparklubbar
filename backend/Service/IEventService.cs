using backend.DTO;

namespace backend.Service;

public interface IEventService
{
    EventDto? GetEventById(int id);
    EventDto CreateEvent(EventDto eventDto);
}
