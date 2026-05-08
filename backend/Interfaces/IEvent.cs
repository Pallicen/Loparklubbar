using System;

namespace backend.Interfaces;

public interface IEvent
{
  int Id { get; set; }
  string Title { get; set; }
  string Description { get; set; }
  string EventLink { get; set; }
}
