
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
            var newEvent = new Event 
            {
                Id = new Random().Next(1000),
                Title = eventDto.Title,
                Description = eventDto.Description,
                EventLink = eventDto.EventLink
            };

            _eventService.Add(newEvent);

            eventDto.Id = newEvent.Id;
            return CreatedAtAction(nameof(GetEvent), new {id = newEvent.Id}, eventDto);
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
