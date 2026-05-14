
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

    public IEnumerable<Event> GetAll()
        => _dbContext.Events.ToList();

    public Event? GetById(int id)
        => _dbContext.Events.Find(id);

    public Event Add(Event entity)
    {
        _dbContext.Events.Add(entity);
        _dbContext.SaveChanges();
        return entity;
    }
}