using backend.DB;
using backend.Models;

namespace backend.Repositories;

public class EventRepository : IEventRepository
{
    private readonly AppDbContext _dbContext;

    public EventRepository(AppDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public Event? GetById(int id)
    {
        return _dbContext.Events.Find(id);
    }

    public Event Add(Event @event)
    {
        _dbContext.Events.Add(@event);
        _dbContext.SaveChanges();
        return @event;
    }
}
