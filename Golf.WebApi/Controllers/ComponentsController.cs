using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Golf.Services.Interface;
using System;
using Golf.ViewModels;

namespace Golf.Api.Controllers
{
  [Authorize(Policy = "WebAccess")]
  [Route("api/[controller]/{id}")]
  public class ComponentsController : Controller
  {
    private readonly IComponentService _componentService;

    public ComponentsController(IComponentService componentService)
    {
      _componentService = componentService;
    }

    // GET api/dashboard/home
    [HttpGet]
    public IActionResult Get(Guid? id = null)
    {
      if (id != null)
      {
        var component = _componentService.GetComponentById(id.Value);

        return Ok(component);
      }

      var components = _componentService.GetComponents();

      return Ok(components);
    }

    [HttpPost]
    public bool Save([FromBody] ComponentViewModel component)
    {
      return _componentService.SaveComponent(component);
    }
  }
}
