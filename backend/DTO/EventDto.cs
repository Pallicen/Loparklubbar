
using System.ComponentModel.DataAnnotations;

namespace backend.DTO;

public class EventDto 
{
  public int Id { get; set; }
  [Required]
  [StringLength(120)]
  public string Title { get; set; } = string.Empty;
  [Required]
  [StringLength(400)]
  public string Description { get; set; } = string.Empty;
  [Required]
  [StringLength(20)]
  public string Distance { get; set; } = string.Empty;
  [Required]
  [StringLength(200)]
  public string EventLink { get; set; } = string.Empty;
}