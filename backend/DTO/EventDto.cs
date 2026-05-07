using Microsoft.AspNetCore.Mvc;

namespace backend.DTO;

public class EventDto 
{
  public string title { get; set; }
  public string Description { get; set; }
  public string EventLink { get; set; }
}