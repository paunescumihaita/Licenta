using System.Collections.Generic;
using System.Threading.Tasks;

namespace api{
    public interface ITratament{
        Task<List<Tratament>>  GetAll();
        Task CreateNew(Tratament u);
        Task<List<Tratament>> GetById(string id);
        Task<List<Tratament>> Update(string a,string r,int b);
        Task<string> Change();
        Task<List<Tratament>> GetSort();
        Task<List<Tratament>> Update1(string a,int b);
        
        Task<List<Tratament>>  Get();
        Task<string>  Trans();
       
    }
}