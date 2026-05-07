using System;

namespace backend.Models;

public class Event : IEvent
{
  int Id { get; set; }
  string Title { get; set; }
  string Description { get; set; }
  string EvetLink { get; set; }

}
