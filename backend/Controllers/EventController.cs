
using Microsoft.AspNetCore.Mvc;
using backend.DTO;
using backend.Service;
using backend.Models;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class EventController : ControllerBase
    {
        private readonly IEventService _eventService;

        public EventController(IEventService eventService) 
        {
            _eventService = eventService;
        }

        [HttpPost]
        public ActionResult<EventDto> CreateEvent([FromBody] EventDto eventDto)
        {
            var createdEvent = _eventService.Add(eventDto);

            if (createdEvent == null) 
            {
                return BadRequest();
            }

                return CreatedAtAction(
                    nameof(GetEvent),
                    new { id = createdEvent.Id },
                    createdEvent
                );
        }
        

        [HttpGet]
        public ActionResult<IEnumerable<EventDto>> GetAllEvents() 
        {
            var events = _eventService.GetAllEvents();

            if (events == null) {
                return NotFound();
            }

            return Ok(events);
        }

        [HttpGet("{id}")]
        public ActionResult<EventDto> GetEvent(int id) 
        {
            var foundEvent = _eventService.GetEventById(id);

            if (foundEvent == null) 
            {
                return NotFound();
            } 
            return Ok(foundEvent);
        }
    }

}
