using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.WindowsAzure.Storage.Table;

namespace api{
    [ApiController]
    [Route("comanda")]
    public class ComandaC : ControllerBase{
        private IComanda _u;
        
        public ComandaC(IComanda u )
        {
            _u=u;
        }

        [HttpGet("get")]
        public async Task<IEnumerable<Comanda>> Get()
        {
            return await _u.GetAll();
        }
        


        [HttpPost("post")]
        public async Task<string> Post([FromBody]Comanda u )
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