using backend.Interfaces;

namespace backend.Models;

public class Runclub : IRunclub
{
  public int Id { get; set; }
  public string Name { get; set; } = string.Empty;
  public string Description { get; set; } = string.Empty;
  public string SocialMediaLink { get; set; } = string.Empty;
  public string City { get; set; } = string.Empty;
  public string Time { get; set; } = string.Empty;
  public string Level { get; set; } = string.Empty;
  public string Image { get; set; } = string.Empty;
}
