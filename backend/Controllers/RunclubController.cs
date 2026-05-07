using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using backend.DTO;

namespace backend.Controllers
{
    [Route("api/[controller]")]

    [ApiController]

    public class RunclubController : ControllerBase
    {

    public class EventController : ControllerBase
    {
        private readonly IEventService _runclubService;

        public EventController(IEventService runclubService) 
        {
            _runclubService = runclubService;
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
}
