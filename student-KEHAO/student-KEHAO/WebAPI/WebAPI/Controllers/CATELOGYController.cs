using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    public class CATELOGYController : ApiController
    {
        private DBModel db = new DBModel();
        public CATELOGYController()
        {
            db.Configuration.ProxyCreationEnabled = false;
        }
        // GET: api/CATELOGY
        public IQueryable<CATELOGY> GetCATELOGies()
        {
            return db.CATELOGies;
        }

        // GET: api/CATELOGY/5
        [ResponseType(typeof(CATELOGY))]
        public IHttpActionResult GetCATELOGY(int id)
        {
            CATELOGY cATELOGY = db.CATELOGies.Find(id);
            if (cATELOGY == null)
            {
                return NotFound();
            }

            return Ok(cATELOGY);
        }

        // PUT: api/CATELOGY/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutCATELOGY(int id, CATELOGY cATELOGY)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != cATELOGY.CATE_ID)
            {
                return BadRequest();
            }

            db.Entry(cATELOGY).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CATELOGYExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/CATELOGY
        [ResponseType(typeof(CATELOGY))]
        public IHttpActionResult PostCATELOGY(CATELOGY cATELOGY)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.CATELOGies.Add(cATELOGY);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = cATELOGY.CATE_ID }, cATELOGY);
        }

        // DELETE: api/CATELOGY/5
        [ResponseType(typeof(CATELOGY))]
        public IHttpActionResult DeleteCATELOGY(int id)
        {
            CATELOGY cATELOGY = db.CATELOGies.Find(id);
            if (cATELOGY == null)
            {
                return NotFound();
            }

            db.CATELOGies.Remove(cATELOGY);
            db.SaveChanges();

            return Ok(cATELOGY);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CATELOGYExists(int id)
        {
            return db.CATELOGies.Count(e => e.CATE_ID == id) > 0;
        }
    }
}