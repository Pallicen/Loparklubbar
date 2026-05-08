using backend.Models;

namespace backend.Repositories;

public class RunclubRepository : IRunclubRepository
{
    private static readonly List<Runclub> Runclubs =
    [
        new Runclub
        {
            Id = 1,
            Name = "Loparklubbar",
            Description = "Sample runclub",
            SocialMediaLink = "https://example.com",
            City = "Stockholm",
            Time = "18:00",
            Level = "All",
            Image = string.Empty
        }
    ];

    public Runclub? GetById(int id)
    {
        return Runclubs.FirstOrDefault(runclub => runclub.Id == id);
    }
}
