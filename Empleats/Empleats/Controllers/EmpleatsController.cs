using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Empleats.Models;
using System.Windows;

namespace Empleats.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class EmpleatsController : ControllerBase
    {
        private readonly EmpleatsContext _context;

        public EmpleatsController(EmpleatsContext context)
        {
            _context = context;
        }

        // GET: /Empleats
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Empleat>>> GetEmpleat()
        {
            return await _context.Empleat.ToListAsync();
        }

        // GET: /Empleats/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Empleat>> GetEmpleat(int id)
        {
            var empleat = await _context.Empleat.FindAsync(id);

            if (empleat == null)
            {
                return NotFound();
            }

            return empleat;
        }

        // PUT: /Empleats/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEmpleat(int id, Empleat empleat)
        {
            if (id != empleat.EmpleatId)
            {
                return BadRequest();
            }

            _context.Entry(empleat).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmpleatExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: /Empleats
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Empleat>> PostEmpleat(Empleat empleat)
        {
            _context.Empleat.Add(empleat);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEmpleat", new { id = empleat.EmpleatId }, empleat);
        }

        // DELETE: /Empleats/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Empleat>> DeleteEmpleat(int id)
        {
            var empleat = await _context.Empleat.FindAsync(id);
            if (empleat == null)
            {
                return NotFound();
            }

            _context.Empleat.Remove(empleat);
            await _context.SaveChangesAsync();

            return empleat;
        }

        private bool EmpleatExists(int id)
        {
            return _context.Empleat.Any(e => e.EmpleatId == id);
        }

        private void alert(string message)
        {
            Response.WriteAsync("<script>alert('" + message + "')</script>");
        }
    }
}
