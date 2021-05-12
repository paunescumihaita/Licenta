using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.WindowsAzure.Storage.Table;

namespace api{
    [ApiController]
    [Route("transmisie")]
    public class TransmisieC : ControllerBase{
        private ITransmisie _u;
        
        public TransmisieC(ITransmisie u )
        {
            _u=u;
        }

        [HttpGet("get")]
        public async Task<IEnumerable<Transmisie>> Get()
        {
            return await _u.GetAll();
        }

         [HttpGet("add/{a}/{b}")]
        public async Task<string> Get1(string a, string b)
        {
            return await _u.add(a,b);
        }
        


        [HttpPost("post")]
        public async Task<string> Post([FromBody]Transmisie u )
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