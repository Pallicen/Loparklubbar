
using backend.Models;

namespace backend.Repositories;

public interface IEventRepository
{
    IEnumerable<Event> GetAll();
    Event? GetById(int id);
    Event Add(Event entity);
}