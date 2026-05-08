using Microsoft.AspNetCore.Mvc;
using backend.DTO;
using backend.Service;
using backend.Models;

namespace backend.Service;

public interface IRunclubService 
{
  RunclubDto? GetRunclubById(int id);
  void Add(Models.Runclub runclub);
}
