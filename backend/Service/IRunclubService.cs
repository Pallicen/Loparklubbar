using Microsoft.AspNetCore.Mvc;
using backend.DTO;
using backend.Service;

namespace backend.Service;

public interface IRunclubService 
{
  void add(Runclub runclub);
  RunclubDto GetRunclubById(int id);
}