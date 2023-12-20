﻿using EjWebAPI.DataAccess;
using EjWebAPI.Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace EjWebAPI.Controllers
{
    [ApiController]
    // [Authorize]      Solo si se usa autenticación
    [Route("api/[controller]")]
    public class EstudiantesController : ControllerBase
    {
        private readonly AcademiaDbContext context;

        public EstudiantesController(AcademiaDbContext context) => this.context = context;

        // GET api/estudiantes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Estudiante>>> GetAll()
        {
            return await this.context.Estudiantes.ToListAsync();
        }

        // GET api/estudiantes/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<Estudiante>> GetById(int id)
        {
            var estudiante = await this.context.FindAsync<Estudiante>(id);

            if (estudiante == null)
                return this.NotFound();
            return estudiante;
        }

        // POST api/estudiantes
        [HttpPost]
        public async Task<ActionResult<Estudiante>> Create(Estudiante estudiante)
        {
            this.context.Add(estudiante);
            await this.context.SaveChangesAsync();

            return this.CreatedAtAction(nameof(GetById), new {id = estudiante.Id}, estudiante);
        }

        // PUT api/estudiantes
        [HttpPut]
        public async Task<ActionResult> Update(Estudiante estudiante)
        {
            this.context.Update(estudiante);
            await this.context.SaveChangesAsync();

            return this.NoContent();
        }

        // DELETE api/estudiantes/id
        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var estudiante = await this.context.FindAsync<Estudiante>(id);

            if (estudiante == null)
                return this.NotFound();
            this.context.Remove(estudiante);

            await this.context.SaveChangesAsync();
            return this.NoContent();
        }

    }
}
