using System;

namespace backend.Interfaces;

public interface IRunclub
{
  public int Id { get; set; }
  public string Name { get; set; }
  public string Description { get; set; }
  public string SocialMediaLink { get; set; }
  public string City { get; set; }
  public string Time { get; set; }
  public string Level { get; set; }
  public string Image { get; set; }

}
