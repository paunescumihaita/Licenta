using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.WindowsAzure.Storage.Table;

namespace api{
    [ApiController]
    [Route("tratament")]
    public class TratamentC : ControllerBase{
        private ITratament _u;
        
        public TratamentC(ITratament u )
        {
            _u=u;
        }

        [HttpGet("get")]
        public async Task<IEnumerable<Tratament>> Get()
        {
            return await _u.GetAll();
        }
         [HttpGet("get/{id}")]
        public async Task<IEnumerable<Tratament>> Getname(string id)
        {
            return await _u.GetById( id);
        }
         [HttpGet("get/{a}/{b}")]
        public async Task<List<Tratament>> Update(string a,int b)
        {
            return await _u.Update(a,b);
        }
         [HttpGet("icon")]
        public async Task<List<Tratament>> GetByIcon(string a,int b)
        {
            return await _u.Get();
        }


      

        

        [HttpPost("post")]
        public async Task<string> Post([FromBody]Tratament u )
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