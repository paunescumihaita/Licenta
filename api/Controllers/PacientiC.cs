using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.WindowsAzure.Storage.Table;

namespace api{
    [ApiController]
    [Route("pacienti")]
    public class PacientiC : ControllerBase{
        private IPacienti _u;
        
        public PacientiC(IPacienti u )
        {
            _u=u;
        }

        [HttpGet("get")]
        public async Task<IEnumerable<Pacienti>> Get1()
        {
            return await _u.GetAll();
        }
         [HttpGet("gettest")]
        public async Task<string> Get()
        {
            return "test";
        }

         [HttpGet("get/{nume}")]
        public async Task<IEnumerable<Pacienti>> Getname(string nume)
        {
            return await _u.GetByName( nume);
        }

         [HttpGet("getId/{nume}")]
        public async Task<Pacienti> GetId(string nume)
        {
            return await _u.GetById( nume);
        }

        [HttpPost("post")]
        public async Task<string> Post([FromBody]Pacienti u )
        {
            
            try{
                await _u.CreateNew(u);
                return "S-a adaugat cu succes";
            }
            catch(System.Exception e)
            {
                return "Eroare " + e.Message;
                throw;
            }
        }



    }



}