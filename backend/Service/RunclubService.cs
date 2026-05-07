using Microsoft.AspNetCore.Mvc;
using backend.DTO;
using backend.IEventService;
using backend.Repositories;

namespace backend.Service;

public class RunclubService : IRunclubService
{
  private readonly IRunclubRepository _runclubRepository;

  public RunclubService(IRunclubRepository runclubRepository)
  {
    _runclubRepository = runclubRepository;
  }

  public RunclubDto GetRunclubById(int id)
  {
    var runclub = _runclubRepository.GetById(id);
    return new RunclubDto 
    {
      Id = runclub.Id, 
      Name = runclub.Name, 
      Description = runclub.Description, 
      SocialMediaLink = runclub.SocialMediaLink, 
      City = runclub.City, 
      Time = runclub.Time, 
      Level = runclub.Level};
  }
  
}