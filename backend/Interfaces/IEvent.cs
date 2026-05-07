using System;

namespace backend.Interfaces;

public interface IEvent
{
  public int Id { get; set; }
  public string Title { get; set; }
  public string Description { get; set; }
  public string EventLink { get; set; }
}
