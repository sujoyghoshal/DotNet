using Microsoft.AspNetCore.Mvc;

namespace LocalStorageApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MessageController : ControllerBase
    {
        // GET api/message
        [HttpGet]
        public ActionResult<string> GetMessage()
        {
            return Ok("Hello from .NET server!");
        }
    }
}
