
using Microsoft.AspNetCore.Mvc;
using backend.DTO;
using backend.Service;
using backend.Models;

namespace backend.Controllers
{
    [Route("[controller]")]
    [ApiController]

    public class RunclubController : ControllerBase
    {
        private readonly IRunclubService _runclubService;

        public RunclubController(IRunclubService runclubService) 
        {
            _runclubService = runclubService;
        }

        [HttpPost]
        public ActionResult<RunclubDto> CreateRunclub([FromBody] RunclubDto runclubDto)
        {
            var createdRunclub = _runclubService.Add(runclubDto);

                return CreatedAtAction(
                    nameof(GetRunclub),
                    new { id = createdRunclub.Id },
                    createdRunclub
                );
            
        }

        [HttpGet]
        public ActionResult<IEnumerable<EventDto>> GetAllRunclubs() 
        {
            var runclubs = _runclubService.GetAllRunclubs();

            return Ok(runclubs);
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

