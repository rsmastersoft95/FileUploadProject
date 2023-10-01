using Grpc.Net.Client;
using Microsoft.AspNetCore.Mvc;
using TestingServiceRPC;

namespace FileUploadProject.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class HomeController : ControllerBase
    {
        private readonly IHostEnvironment _environment;

        public HomeController(IHostEnvironment environment)
        {
            _environment = environment;
        }

        [HttpPost]
        [Route("SaveText")]
        public async Task<IActionResult> SaveText([FromBody] SaveTextRequest ?_request)
        {
            try
            {
                string dirPath = Path.Combine(_environment.ContentRootPath, "ExportedFiles");
                if (!Directory.Exists(dirPath))
                {
                    Directory.CreateDirectory(dirPath);
                }
                System.IO.File.WriteAllText(Path.Combine(dirPath,"SampleFile.txt"), _request?.text ?? "");
                var input = new AddTwoIntRequest { Num1 = 25 , Num2 = 25 };
                var channel = GrpcChannel.ForAddress("http://192.168.1.11:2350");
                var client = new Calculate.CalculateClient(channel);
                var reply = await client.AddNumbersAsync(input);
                var total = reply?.Result.ToString();
                var client2 = new Testing.TestingClient(channel);
                var reply2 = await client2.TestMessageAsync(new TestMessageRequest { Name = "Rahul Sharma" });


                return Ok(new { success = true, message = (reply2?.Message??"")+" "+total });
            }
            catch (Exception ex)
            {
                return Ok(new { success = false, message = ex.Message });
            }
        }

    }
}