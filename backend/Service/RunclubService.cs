
using backend.DTO;
using backend.Repositories;
using backend.DB;
using backend.Service;
using backend.Models;

namespace backend.Service;

public class RunclubService : IRunclubService
{
    private readonly AppDbContext _context;

    public RunclubService(AppDbContext context)
    {
        _context = context;
    }

    public void Add(Runclub runclub)
    {
        _context.Runclubs.Add(runclub);
        _context.SaveChanges();
    }

  public RunclubDto GetRunclubById(int id)
    {
        var runclub = _context.Runclubs.FirstOrDefault(x => x.Id == id);

        if (runclub == null)
            return null!;
            
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
  
}