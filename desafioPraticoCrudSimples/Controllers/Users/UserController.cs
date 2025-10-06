using desafioPraticoCrudSimples.Models.Users;
using desafioPraticoCrudSimples.Services.Users;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Exchange.WebServices.Data;

namespace desafioPraticoCrudSimples.Controllers.Users;

[ApiController]
[Route("users")]
public class UserController(ILogger<UserController> logger) : ControllerBase
{
    [HttpGet]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType<ServiceResult>(StatusCodes.Status400BadRequest)]
    public async Task<IActionResult> Get([FromServices] UserService uService,
                                         CancellationToken cancellationToken = default)
    {
        try
        {
            var getUsers = uService.GetAll();

            return Ok(getUsers);
        }
        catch (Exception)
        {
            throw;
        }
    }

    [HttpPost]
    [ProducesResponseType(StatusCodes.Status204NoContent)]
    [ProducesResponseType<ServiceResult>(StatusCodes.Status400BadRequest)]
    public async Task<IActionResult> Post([FromBody] PostUserArgs args,
                                          [FromServices] UserService uService,
                                          CancellationToken cancellationToken = default)
    {
        try
        {
            var user = new UserListItemModel
            {
                Name = args.Name,
                Email = args.Email,
            };

            var postUser = uService.Add(user);

            return Ok(postUser);
        }
        catch (Exception)
        {
            throw;
        }
    }

    [HttpDelete("userId")]
    [ProducesResponseType(StatusCodes.Status204NoContent)]
    [ProducesResponseType<ServiceResult>(StatusCodes.Status400BadRequest)]
    public async Task<IActionResult> Delete([FromQuery] Guid userId,
                                           [FromServices] UserService uService,
                                           CancellationToken cancellationToken = default)
    {
        try
        {
            var deleteUser = uService.Delete(userId);

            return Ok(deleteUser);
        }
        catch (Exception)
        {
            throw;
        }
    }
}
