using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Table;
using System;

namespace api{
    public class SalonRepo : ISalon
    {
        private CloudTableClient Client;
        private CloudTable Table;
        public SalonRepo()
        {
            Task.Run(async () => {await InitTable() ;})
            .GetAwaiter()
            .GetResult();
        }
        public async Task CreateNew(Salon u)
        {
            var insertop =TableOperation.Insert(u);
            await Table.ExecuteAsync(insertop);
        }
         public async Task<string> add(string a,string b)
        {
            Salon u=new Salon(a,b);
            var insertop =TableOperation.Insert(u);
            await Table.ExecuteAsync(insertop);
            return "succes";
        }
        public async Task Delete(string cnp,string nume)
        {
            var entityPattern = new DynamicTableEntity();
            entityPattern.PartitionKey=cnp;
            entityPattern.ETag = "*";
            entityPattern.RowKey=nume;

            await Table.ExecuteAsync(TableOperation.Delete(entityPattern));

        }
        public async Task<List<Salon>> GetAll()
        {
            var u = new List<Salon>();
            TableQuery<Salon> query=new TableQuery<Salon>();
            TableContinuationToken token=null;
            do{
                TableQuerySegment<Salon> resultSegment=await Table.ExecuteQuerySegmentedAsync(query,token);
                u.AddRange(resultSegment.Results);
            }while(token!=null);
            return u;

        }

      
        

        private async  Task InitTable()
        {
            string conect ="DefaultEndpointsProtocol=https;AccountName=datc;AccountKey=IK3FdIeFdddY9G4O4iRo/z+68xaHta1/pvoI4Bo4v2rDkCYJdLCedfpPOtSSCjisEdjdw0fFYwScoHKmvZbcvQ==;EndpointSuffix=core.windows.net";
            var acc=CloudStorageAccount.Parse(conect);
            Client=acc.CreateCloudTableClient();
            Table=Client.GetTableReference("salon");
            await Table.CreateIfNotExistsAsync();
        }

       
    }
}