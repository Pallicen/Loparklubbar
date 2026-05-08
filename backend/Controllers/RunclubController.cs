using backend.DTO;
using backend.Service;
using Microsoft.AspNetCore.Mvc;

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
