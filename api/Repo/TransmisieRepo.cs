using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Table;
using System;

namespace api{
    public class TransmisieRepo : ITransmisie
    {
        private CloudTableClient Client;
        private CloudTable Table;
        public TransmisieRepo()
        {
            Task.Run(async () => {await InitTable() ;})
            .GetAwaiter()
            .GetResult();
        }
        public async Task CreateNew(Transmisie u)
        {
            var insertop =TableOperation.Insert(u);
            await Table.ExecuteAsync(insertop);
        }

        public async Task<List<Transmisie>> GetAll()
        {
            var u = new List<Transmisie>();
            TableQuery<Transmisie> query=new TableQuery<Transmisie>();
            TableContinuationToken token=null;
            do{
                TableQuerySegment<Transmisie> resultSegment=await Table.ExecuteQuerySegmentedAsync(query,token);
                u.AddRange(resultSegment.Results);
            }while(token!=null);
            return u;

        }

      
        

        private async  Task InitTable()
        {
            string conect ="DefaultEndpointsProtocol=https;AccountName=datc;AccountKey=IK3FdIeFdddY9G4O4iRo/z+68xaHta1/pvoI4Bo4v2rDkCYJdLCedfpPOtSSCjisEdjdw0fFYwScoHKmvZbcvQ==;EndpointSuffix=core.windows.net";
            var acc=CloudStorageAccount.Parse(conect);
            Client=acc.CreateCloudTableClient();
            Table=Client.GetTableReference("transmisie");
            await Table.CreateIfNotExistsAsync();
        }

       
    }
}