using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularTask.Controllers
{
    [ApiController]
    //[Route("api/[controller]")]
    [Route("api/[controller]/[action]/{id?}")]

    public class EmployeeController : ControllerBase
    {
        private readonly ILogger<EmployeeController> _logger;

        public EmployeeController(ILogger<EmployeeController> logger)
        {
            _logger = logger;
        }

        [HttpGet]

        public string EmployeeName(string name)
        {
            
            return name;
        }
    }
}
