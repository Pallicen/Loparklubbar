using backend.Models;

namespace backend.Repositories;

public interface IRunclubRepository
{
    Runclub? GetById(int id);
}
