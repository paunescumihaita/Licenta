using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Table;
using System;





namespace api{
    public class PacientiRepo : IPacienti
    {
        private CloudTableClient Client;
        private CloudTable Table;
        public PacientiRepo()
        {
            Task.Run(async () => {await InitTable() ;})
            .GetAwaiter()
            .GetResult();
        }
        string sex(string a)
        {
            if(a[0]=='1'||a[0]=='5')
            return "M";
            if(a[0]=='2'||a[0]=='6')
            return "F";
            return "";

    
        }
        int varsta(string a)
        {
            DateTime date = DateTime.Now;
            int zi=date.Day;
            int luna=date.Month;
            int an=date.Year;
            int aa1=(a[1]-'0')*10+(a[2]-'0');
            int l=(a[3]-'0')*10+(a[4]-'0');
            int z=(a[5]-'0')*10+(a[6]-'0');


            if(a[0]=='1'||a[0]=='2')
            {
               aa1=aa1+1900;
               if(l>luna)
               return an-aa1;
               else
               {
                   if(l==luna)
                   {
                       if(z>zi)
                       return an-aa1-1;
                       else return an-aa1;
                   }
                   else return an-aa1;
               }
            }
            if(a[0]=='5'||a[0]=='6')
            {
               aa1=aa1+2000;
               if(l>luna)
               return an-aa1;
               else
               {
                   if(l==luna)
                   {
                       if(z>zi)
                       return an-aa1-1;
                       else return an-aa1;
                   }
                   else return an-aa1;
               }
            }
           
            return 1;

        }
        public async Task CreateNew(Pacienti u)
        {
            u.sex=sex(u.PartitionKey);
            u.varsta=varsta(u.PartitionKey);
            var insertop =TableOperation.Insert(u);
            await Table.ExecuteAsync(insertop);
        }

        public async Task<List<Pacienti>> GetAll()
        {
            var u = new List<Pacienti>();
            TableQuery<Pacienti> query=new TableQuery<Pacienti>();
            TableContinuationToken token=null;
            do{
                TableQuerySegment<Pacienti> resultSegment=await Table.ExecuteQuerySegmentedAsync(query,token);
                u.AddRange(resultSegment.Results);
            }while(token!=null);
            return u;

        }

         public async Task<List<Pacienti>> GetByName(string nume)
        {
            var u = new List<Pacienti>();
            var v = new List<Pacienti>();
            TableQuery<Pacienti> query=new TableQuery<Pacienti>();
            TableContinuationToken token=null;
            do{
                TableQuerySegment<Pacienti> resultSegment=await Table.ExecuteQuerySegmentedAsync(query,token);
                u.AddRange(resultSegment.Results);
            }while(token!=null);
            foreach(Pacienti p in u)
            {
                if(p.RowKey.Length>nume.Length ||p.RowKey.Length==nume.Length ){
                string a=p.RowKey.Substring(0,nume.Length);
                Console.WriteLine(nume+"   "+a);
                if(a==nume)
                v.Add(p);
                }
                   
            }
         




            return v;

        }
        public async Task<Pacienti>  GetById(string nume)
        {
              var u = new List<Pacienti>();
              
            TableQuery<Pacienti> query=new TableQuery<Pacienti>();
            TableContinuationToken token=null;
            do{
                TableQuerySegment<Pacienti> resultSegment=await Table.ExecuteQuerySegmentedAsync(query,token);
                u.AddRange(resultSegment.Results);
            }while(token!=null);
            foreach( Pacienti i in u)
            {
                if(i.PartitionKey==nume)
                return i;

            }
            return null;

       

        }
       

        private async  Task InitTable()
        {
            string conect ="DefaultEndpointsProtocol=https;AccountName=datc;AccountKey=IK3FdIeFdddY9G4O4iRo/z+68xaHta1/pvoI4Bo4v2rDkCYJdLCedfpPOtSSCjisEdjdw0fFYwScoHKmvZbcvQ==;EndpointSuffix=core.windows.net";
            var acc=CloudStorageAccount.Parse(conect);
            Client=acc.CreateCloudTableClient();
            Table=Client.GetTableReference("pacienti");
            await Table.CreateIfNotExistsAsync();
        }

       
    }
}