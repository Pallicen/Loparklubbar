using backend.Models;

namespace backend.Repositories;

public interface IEventRepository
{
    Event? GetById(int id);
    Event Add(Event @event);
}
