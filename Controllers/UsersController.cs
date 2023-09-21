using Carro_assignment.Models;
using Microsoft.AspNetCore.Mvc;

// Add
using Microsoft.EntityFrameworkCore;

namespace Carro_assignment.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UsersController : Controller
    {
        public CarroContext _this_context;
        public UsersController(CarroContext context)
        {
            _this_context = context;
        }

        // api/<controller>/Versions
        [HttpGet("Versions")]
        public IActionResult Versions( )
        {
            string result = "1.0";

            return Json(result.ToArray());
        }

        //
        // api/<controller>/Addemployeedata
        [HttpGet("Addemployeedata")]
        public IActionResult Addemployeedata(string Username, string Name, string Lastname, string Department, string Password, string Email)
        {
            Task<List<Employee>> populate_employee = AddEmployeeData(Username, Name, Lastname, Department, Password, Email);

            Employee employee = new Employee();
            if (populate_employee.Result.Find(con => con.Username == Username) != null)
            {
                employee.Username = populate_employee.Result.Find(con => con.Username == Username).Username;
                employee.Name = populate_employee.Result.Find(con => con.Username == Username).Name;
                employee.Lastname = populate_employee.Result.Find(con => con.Username == Username).Lastname;
                employee.Department = populate_employee.Result.Find(con => con.Username == Username).Department;
                employee.Password = populate_employee.Result.Find(con => con.Username == Username).Password;
                employee.Email = populate_employee.Result.Find(con => con.Username == Username).Email;
                List<Employee> result2 = new List<Employee> { employee };
                return Json(result2.ToArray());
            }
            else
            {
                List<Employee> result2 = new List<Employee> {  };
                return Json(result2.ToArray());
            }
            
        }

        //
        // api/<controller>/login_function
        [HttpGet("Login_function")]
        public IActionResult Login_function(string username, string password)
        {
            Task<List<Employee>> populate_employee = populateEmployeeData();

            Employee employee = new Employee();

            if(populate_employee.Result.Find(con => con.Username == username) != null)
            {
                employee.Username = populate_employee.Result.Find(con => con.Username == username).Username;
                employee.Name = populate_employee.Result.Find(con => con.Username == username).Name;
                employee.Lastname = populate_employee.Result.Find(con => con.Username == username).Lastname;
                employee.Department = populate_employee.Result.Find(con => con.Username == username).Department;
                employee.Password = populate_employee.Result.Find(con => con.Username == username).Password;
                employee.Email = populate_employee.Result.Find(con => con.Username == username).Email;

                if (String.Equals(employee.Password.ToString(), password))
                {
                    Userstatus userstatus = new Userstatus();
                    userstatus.Username = employee.Username;
                    userstatus.Starttime = DateTime.Now.ToString("yyyy-mm-dd HH:mm:ss");
                    userstatus.Endtime = "";
                    userstatus.Status = "Login";

                    //
                    Task<List<Employee>> populate_employee2 = AddHistoryData(employee.Username.ToString());
                    //


                    List<Userstatus> result2 = new List<Userstatus> { userstatus };
                    return Json(result2.ToArray());
                }
                else
                {
                    List<Userstatus> result2 = new List<Userstatus> { };
                    return Json(result2.ToArray());
                }
            }

            List<Userstatus> result = new List<Userstatus> { };
            return Json(result.ToArray());
        }
        //

        [HttpGet]
        public async Task<List<Employee>> Get()
        {
            List<Carro_assignment.Models.Employee> result = await _this_context.Employees.ToListAsync();

            return result;
        }


        public IActionResult Index()
        {
            return View();
        }

        async Task<List<Employee>> populateEmployeeData()
        {
            List<Carro_assignment.Models.Employee> result = await _this_context.Employees.ToListAsync();


            return result;
        }

        async Task<List<Employee>> AddEmployeeData(string Username, string Name, string Lastname, string Department, string Password, string Email)
        {
            Employee employee = new Employee();
            employee.Username = Username;
            employee.Name = Name;
            employee.Lastname = Lastname;
            employee.Department = Department;
            employee.Password = Password;
            employee.Email = Email;

            _this_context.Add(employee).State = EntityState.Added;
            int b_success = await _this_context.SaveChangesAsync();

            List<Carro_assignment.Models.Employee> result = await _this_context.Employees.ToListAsync();

            return result;
        }

        async Task<List<Employee>> AddHistoryData(string userid)
        {

            //
            Task<List<Employee>> populate_employee = populateEmployeeData();
            Employee employee = new Employee();
            employee.Username = populate_employee.Result.Find(con => con.Username == userid).Username;

            //

            Logintime logintime = new Logintime();
            logintime.Status = "Login";
            logintime.Lasttimestamp = DateTime.Now.ToString("yyyy-mm-dd HH:mm:ss");
            logintime.Userid = employee.Username.ToString();

            _this_context.Logintimes.Add(logintime).State = EntityState.Added;
            int b_success = await _this_context.SaveChangesAsync();

            List<Carro_assignment.Models.Employee> result = await _this_context.Employees.ToListAsync();

            return result;
        }
    }
}