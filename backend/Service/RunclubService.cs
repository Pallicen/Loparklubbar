
using backend.DTO;
using backend.Repositories;
using backend.Models;

namespace backend.Service;

public class RunclubService : IRunclubService
{
    private readonly IRunclubRepository _repository;

    public RunclubService(IRunclubRepository repository)
    {
        _repository = repository;
    }

    public IEnumerable<RunclubDto> GetAllRunclubs()
    {
        return _repository.GetAll()
            .Select(e => new RunclubDto
            {
                Id = e.Id,
                Name = e.Name,
                Description = e.Description,
                City = e.City,
                Time = e.Time,
                Level = e.Level,
                SocialMediaLink = e.SocialMediaLink,
                Image = e.Image
            });
    }


  public RunclubDto? GetRunclubById(int id)
    {

      var runclub = _repository.GetById(id);

        if (runclub == null) return null;

        return new RunclubDto
        {
            Id = runclub.Id, 
            Name = runclub.Name, 
            Description = runclub.Description, 
            SocialMediaLink = runclub.SocialMediaLink, 
            City = runclub.City, 
            Time = runclub.Time, 
            Level = runclub.Level,
            Image = runclub.Image
        };

  }

      public RunclubDto Add(RunclubDto dto)
    {
        var runclub = new Runclub
        {
            Name = dto.Name.Trim(), 
            Description = dto.Description.Trim(), 
            SocialMediaLink = dto.SocialMediaLink.Trim(), 
            City = dto.City.Trim(), 
            Time = dto.Time.Trim(), 
            Level = dto.Level.Trim(),
            Image = dto.Image.Trim()
        };

        var created = _repository.Add(runclub);

        return new RunclubDto
        {
            Id = created.Id, 
            Name = created.Name, 
            Description = created.Description, 
            SocialMediaLink = created.SocialMediaLink, 
            City = created.City, 
            Time = created.Time, 
            Level = created.Level,
            Image = created.Image
        };
    }

}