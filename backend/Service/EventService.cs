using backend.DTO;
using backend.Repositories;
using backend.Models;

namespace backend.Service;

public class EventService : IEventService
{
    private readonly IEventRepository _repository;

    public EventService(IEventRepository repository)
    {
        _repository = repository;
    }

    public IEnumerable<EventDto> GetAllEvents()
    {
        return _repository.GetAll()
            .Select(e => new EventDto
            {
                Id = e.Id,
                Title = e.Title,
                Description = e.Description,
                Distance = e.Distance,
                EventLink = e.EventLink
            });
    }

    public EventDto? GetEventById(int id)
    {
        var e = _repository.GetById(id);

        if (e == null) return null;

        return new EventDto
        {
            Id = e.Id,
            Title = e.Title,
            Description = e.Description,
            Distance = e.Distance,
            EventLink = e.EventLink
        };
    }

    public EventDto Add(EventDto dto)
    {
        var entity = new Event
        {
            Title = dto.Title.Trim(),
            Description = dto.Description.Trim(),
            Distance = dto.Distance.Trim(),
            EventLink = dto.EventLink.Trim()
        };

        var created = _repository.Add(entity);

        return new EventDto
        {
            Id = created.Id,
            Title = created.Title,
            Description = created.Description,
            Distance = created.Distance,
            EventLink = created.EventLink
        };
    }
}