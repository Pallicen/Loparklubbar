
using backend.Models;

namespace backend.Repositories;

public interface IRunclubRepository
{
    IEnumerable<Runclub> GetAll();
    Runclub? GetById(int id);
    Runclub Add(Runclub runclub);
}