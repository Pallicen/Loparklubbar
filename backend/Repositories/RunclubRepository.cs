
using backend.DB;
using backend.Models;

namespace backend.Repositories;

public class RunclubRepository : IRunclubRepository
{

    private readonly AppDbContext _dbContext;

    public RunclubRepository(AppDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public IEnumerable<Runclub> GetAll()
        => _dbContext.Runclubs.ToList();

    public Runclub? GetById(int id)
        => _dbContext.Runclubs.Find(id);

    public Runclub Add(Runclub runclub)
    {
        _dbContext.Runclubs.Add(runclub);
        _dbContext.SaveChanges();
        return runclub;
    }
}