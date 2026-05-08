
using Microsoft.AspNetCore.Mvc;
using backend.DTO;
using backend.Service;
using backend.Models;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class RunclubController : ControllerBase
    {
        private readonly IRunclubService _runclubService;

        public RunclubController(IRunclubService runclubService) 
        {
            _runclubService = runclubService;
        }

        [HttpPost]
        public IActionResult CreateRunclub([FromBody] RunclubDto runclubDto)
        {
            var newRunclub = new Runclub 
            {
                Id = new Random().Next(1000),
                Name = runclubDto.Name,
                Description = runclubDto.Description,
                SocialMediaLink = runclubDto.SocialMediaLink,
                City = runclubDto.City,
                Time = runclubDto.Time,
                Level = runclubDto.Level,
                Image = runclubDto.Image
            };

            _runclubService.Add(newRunclub);
            
            return Ok(newRunclub);
        }

        [HttpGet("{id}")]
        public ActionResult<RunclubDto> GetRunclub(int id) 
        {
            var runclub = _runclubService.GetRunclubById(id);

            if (runclub == null) 
            {
                return NotFound();
            }
            
            return Ok(runclub);
        }
    }
}

