using backend.DTO;

namespace backend.Service;

public interface IRunclubService
{
    RunclubDto? GetRunclubById(int id);
}
