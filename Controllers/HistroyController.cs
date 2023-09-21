using Carro_assignment.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Carro_assignment.Controllers
{
    //[ApiController]
    //[Route("[controller]")]
    [Route("history")]
    public class HistroyController : Controller
    {

        // working
        public CarroContext _this_context;

        public HistroyController(CarroContext context)
        {
            _this_context = context;
        }

        [HttpGet]
        public async Task<List<Logintime>> Get()
        {
            return await _this_context.Logintimes.ToListAsync();
        }

        // api/<controller>/Versions
        [HttpGet("Versions")]
        public IActionResult Versions()
        {
            string result = "1.0";

            return Json(result.ToArray());
        }

        public IActionResult Index()
        {
            return View();
        }
    }
}
