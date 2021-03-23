using EquipmentAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EquipmentAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EquipmentController : ControllerBase
    {
        public IEquipmentRepository _IEquipmentRepository { get; set; }
        public EquipmentController(IEquipmentRepository equipmentRepository)
        {
            _IEquipmentRepository = equipmentRepository;
        }

        [HttpPost]
        public IActionResult Create([FromBody]Equipment model)
        {
            if (model== null)
                return BadRequest();
            _IEquipmentRepository.Add(model);
            return new ObjectResult("Success");
        }
        [HttpGet]
        public IActionResult GetEquipments()
        {
            IEnumerable<Equipment> equipments = _IEquipmentRepository.GetAll();
            return Ok(equipments);
        }
        [HttpGet("{id}", Name = "GetEquipment")]
        public IActionResult GetEquipments(int id)
        {
            Equipment equipments = _IEquipmentRepository.Find(id);
            return Ok(equipments);
        }
        [HttpPut("{id}")]
        public IActionResult put(int id, [FromBody]Equipment updateequip)
        {
            updateequip.EquipmentId = id;
            _IEquipmentRepository.Update(updateequip);
            return Ok("Updated");
        }
        [HttpDelete("{id}")]
        public IActionResult delete(int id)
        {
            _IEquipmentRepository.Remove(id);
            return Ok("deleted");
        }
    }
}
