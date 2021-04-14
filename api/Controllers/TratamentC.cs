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
        [HttpGet("change")]
        public async Task<string> Change()
        {
            return await _u.Change();
        }
         [HttpGet("get/{id}")]
        public async Task<IEnumerable<Tratament>> Getname(string id)
        {
            return await _u.GetById( id);
        }
         [HttpGet("get/{a}/{r}/{b}")]
        public async Task<List<Tratament>> Update(string a,string r,int b)
        {
            return await _u.Update(a,r,b);
        }

         [HttpGet("time/{a}/{b}")]
        public async Task<List<Tratament>> Update1(string a,int b)
        {
            return await _u.Update1(a,b);
        }
         [HttpGet("icon")]
        public async Task<List<Tratament>> GetByIcon(string a,int b)
        {
            return await _u.Get();
        }
         [HttpGet("trans")]
        public async Task<string> tr(string a,int b)
        {
            return await _u.Trans();
        }

         [HttpGet("get/sort")]
        public async Task<List<Tratament>> GetSort()
        {
            return await _u.GetSort();
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