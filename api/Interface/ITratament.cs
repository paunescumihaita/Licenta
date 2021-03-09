using System.Collections.Generic;
using System.Threading.Tasks;

namespace api{
    public interface ITratament{
        Task<List<Tratament>>  GetAll();
        Task CreateNew(Tratament u);
        Task<List<Tratament>> GetById(string id);
        Task<List<Tratament>> Update(string a,int b);
        
        Task<List<Tratament>>  Get();
       
    }
}