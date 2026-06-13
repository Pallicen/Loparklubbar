
using System.ComponentModel.DataAnnotations;

namespace backend.DTO;

public class RunclubDto
{
  public int Id { get; set; } 
  [Required]
  [StringLength(120)]
  public string Name { get; set; } = string.Empty;
  [Required]
  [StringLength(400)]
  public string Description { get; set; } = string.Empty;
  [Required]
  [StringLength(200)]
  public string SocialMediaLink { get; set; } = string.Empty;
  [Required]
  [StringLength(120)]
  public string City { get; set; } = string.Empty;
  [Required]
  [StringLength(120)]
  public string Time { get; set; } = string.Empty;
  [Required]
  [StringLength(40)]
  public string Level { get; set; } = string.Empty;
  [StringLength(300)]
  public string Image { get; set; } = string.Empty;
}