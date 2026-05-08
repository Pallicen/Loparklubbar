namespace backend.Interfaces;

public interface IRunclub
{
  int Id { get; set; }
  string Name { get; set; }
  string Description { get; set; }
  string SocialMediaLink { get; set; }
  string City { get; set; }
  string Time { get; set; }
  string Level { get; set; }
  string Image { get; set; }

}
