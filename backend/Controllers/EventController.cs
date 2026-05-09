
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

        [HttpGet]
        public ActionResult<IEnumerable<EventDto>> GetAllEvents() 
        {
            var events = _eventService.GetAllEvents();

            if (events == null) 
            {
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

        // [HttpDelete("{id}")]
        // public ActionResult<EventDto> DeleteEvent(int id) 
        // {
        //     var DeleteEv = _eventService.DeleteEventById(id);

        //     if (DeleteEv == null) 
        //     {
        //         return NotFound();
        //     } 
        //     return Ok(DeleteEv);
        // }
    }

}
