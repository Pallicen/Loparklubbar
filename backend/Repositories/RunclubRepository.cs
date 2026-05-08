
using backend.Models;

namespace backend.Repositories;

public class RunclubRepository : IRunclubRepository
{
    private static readonly List<Runclub> Runclubs =
    [
        new Runclub
        {
            Id = 1,
            Name = "Löparklubb Stockholm",
            Description = "Gemensamma pass för alla nivåer.",
            SocialMediaLink = "https://example.com/loparklubb-stockholm",
            City = "Stockholm",
            Time = "18:00",
            Level = "Medel",
            Image = string.Empty
        }
    ];

    public Runclub? GetById(int id)
    {
        return Runclubs.FirstOrDefault(runclub => runclub.Id == id);
    }
}