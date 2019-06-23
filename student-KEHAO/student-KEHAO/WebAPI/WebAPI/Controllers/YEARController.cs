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
    public class YEARController : ApiController
    {
        private DBModel db = new DBModel();
        public YEARController()
        {
            db.Configuration.ProxyCreationEnabled = false;
        }
        // GET: api/YEAR
        public IQueryable<YEAR> GetYEARs()
        {
            return db.YEARs;
        }

        // GET: api/YEAR/5
        [ResponseType(typeof(YEAR))]
        public IHttpActionResult GetYEAR(int id)
        {
            YEAR yEAR = db.YEARs.Find(id);
            if (yEAR == null)
            {
                return NotFound();
            }

            return Ok(yEAR);
        }

        // PUT: api/YEAR/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutYEAR(int id, YEAR yEAR)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != yEAR.YEAR_ID)
            {
                return BadRequest();
            }

            db.Entry(yEAR).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!YEARExists(id))
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

        // POST: api/YEAR
        [ResponseType(typeof(YEAR))]
        public IHttpActionResult PostYEAR(YEAR yEAR)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.YEARs.Add(yEAR);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = yEAR.YEAR_ID }, yEAR);
        }

        // DELETE: api/YEAR/5
        [ResponseType(typeof(YEAR))]
        public IHttpActionResult DeleteYEAR(int id)
        {
            YEAR yEAR = db.YEARs.Find(id);
            if (yEAR == null)
            {
                return NotFound();
            }

            db.YEARs.Remove(yEAR);
            db.SaveChanges();

            return Ok(yEAR);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool YEARExists(int id)
        {
            return db.YEARs.Count(e => e.YEAR_ID == id) > 0;
        }
    }
}