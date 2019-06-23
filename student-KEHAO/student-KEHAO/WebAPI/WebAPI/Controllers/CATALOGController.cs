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
    public class CATALOGController : ApiController
    {
        private DBModel db = new DBModel();
        public CATALOGController()
        {
            db.Configuration.ProxyCreationEnabled = false;
        }
        // GET: api/CATALOG
        public IQueryable<CATALOG> GetCATALOGs()
        {
            return db.CATALOGs;
        }

        // GET: api/CATALOG/5
        [ResponseType(typeof(CATALOG))]
        public IHttpActionResult GetCATALOG(int id)
        {
            CATALOG cATALOG = db.CATALOGs.Find(id);
            if (cATALOG == null)
            {
                return NotFound();
            }

            return Ok(cATALOG);
        }

        // PUT: api/CATALOG/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutCATALOG(int id, CATALOG cATALOG)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != cATALOG.CATA_ID)
            {
                return BadRequest();
            }

            db.Entry(cATALOG).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CATALOGExists(id))
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

        // POST: api/CATALOG
        [ResponseType(typeof(CATALOG))]
        public IHttpActionResult PostCATALOG(CATALOG cATALOG)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.CATALOGs.Add(cATALOG);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = cATALOG.CATA_ID }, cATALOG);
        }

        // DELETE: api/CATALOG/5
        [ResponseType(typeof(CATALOG))]
        public IHttpActionResult DeleteCATALOG(int id)
        {
            CATALOG cATALOG = db.CATALOGs.Find(id);
            if (cATALOG == null)
            {
                return NotFound();
            }

            db.CATALOGs.Remove(cATALOG);
            db.SaveChanges();

            return Ok(cATALOG);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CATALOGExists(int id)
        {
            return db.CATALOGs.Count(e => e.CATA_ID == id) > 0;
        }
    }
}