
using backend.Interfaces;

namespace backend.Models;

public class Event : IEvent
{
  public int Id { get; set; }
  public string Title { get; set; } = string.Empty;
  public string Description { get; set; } = string.Empty;
  public string Distance { get; set; } = string.Empty;
  public string EventLink { get; set; } = string.Empty;
}
