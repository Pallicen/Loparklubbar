using Microsoft.AspNetCore.Mvc;
using backend.DTO;
using backend.Service;

namespace backend.Service;

public interface IEventService
{
  void add(Event eventEntity);
  EventDto GetEventById(int id);
}