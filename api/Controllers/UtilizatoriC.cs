using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.WindowsAzure.Storage.Table;

namespace api{
    [ApiController]
    [Route("{utilizatori}")]
    public class UtilizatoriC : ControllerBase{
        private IUtilizatori _u;
        
        public UtilizatoriC(IUtilizatori u )
        {
            _u=u;
        }

        [HttpGet("{get}")]
        public async Task<IEnumerable<Utilizatori>> Get()
        {
            return await _u.GetAll();
        }

         [HttpPost("LogIn")]
         public async Task<bool>LogIn([FromBody]LogInStub l)
         {
             return await _u.LogIn(l);
         }

        [HttpPost("post")]
        public async Task<string> Post([FromBody]Utilizatori u )
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