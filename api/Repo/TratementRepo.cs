using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Table;
using System.Collections.Generic;
using System.Linq;
using System;


namespace api{
    public class TratamentRepo : ITratament
    {
        private CloudTableClient Client;
        private CloudTable Table;
         private CloudTableClient Client1;
        private CloudTable Table1;
        
        public TratamentRepo()
        {
            Task.Run(async () => {await InitTable() ;})
            .GetAwaiter()
            .GetResult();
        }
        public async Task CreateNew(Tratament u)
        {
            u.icon=0;
            var insertop =TableOperation.Insert(u);
            await Table.ExecuteAsync(insertop);
        }
       public async Task<List<Tratament>> Update(string a,string r,int b)
       {
           var u = new List<Tratament>();
           var v = new List<Tratament>();
            TableQuery<Tratament> query=new TableQuery<Tratament>();
            TableContinuationToken token=null;
            do{
                TableQuerySegment<Tratament> resultSegment=await Table.ExecuteQuerySegmentedAsync(query,token);
                u.AddRange(resultSegment.Results);
            }while(token!=null);
            foreach( Tratament i in u)
            {
                if(r==i.RowKey ){
                if(a==i.PartitionKey)
                {
                    i.icon=b;
                    var operation = TableOperation.Replace(i);
                    await Table.ExecuteAsync(operation);
                    
                }
                v.Add(i);
                }
            }

           return v;
       }


        public async Task<List<Tratament>> Update1(string a,int b)
       {
           var u = new List<Tratament>();
         
            TableQuery<Tratament> query=new TableQuery<Tratament>();
            TableContinuationToken token=null;
            do{
                TableQuerySegment<Tratament> resultSegment=await Table.ExecuteQuerySegmentedAsync(query,token);
                u.AddRange(resultSegment.Results);
            }while(token!=null);
            foreach( Tratament i in u)
            {
                
                if(a==i.PartitionKey)
                {
                    i.icon=b;
                    var operation = TableOperation.Replace(i);
                    await Table.ExecuteAsync(operation);
                    break;
                    
                
               
                }
            }

             u = u.OrderBy(x => x.timeAdministrare).ToList();
            return u;
       }
       public async Task<string> Change()
       {
            var u = new List<Tratament>();
            
            List<string> l = new List<string>();

           
            TableQuery<Tratament> query=new TableQuery<Tratament>();
            TableContinuationToken token=null;
            do{
                TableQuerySegment<Tratament> resultSegment=await Table.ExecuteQuerySegmentedAsync(query,token);
                u.AddRange(resultSegment.Results);
            }while(token!=null);
            foreach( Tratament i in u)
            {
               
                if(i.icon==1)
                {
                    i.icon=2;
                    l.Add(i.RowKey);
                    var operation = TableOperation.Replace(i);
                    await Table.ExecuteAsync(operation);
                    
                }
                
            }
            List<string> unic = l.Distinct().ToList();
            string a="";
            foreach(string s in unic)
            {
                a=a+"_"+s;
                Console.WriteLine(s);

            }
            Transmisie t=new Transmisie("1",a);
             var insertop =TableOperation.Insert(t);
            await Table1.ExecuteAsync(insertop);
           



           return "succes";
       }


        public async Task<string>  Trans()
        {
            string a="";
            List<string> x = new List<string>();
            List<string> y = new List<string>();
            
       
            var u = new List<Tratament>();
            TableQuery<Tratament> query=new TableQuery<Tratament>();
            TableContinuationToken token=null;
            do{
                TableQuerySegment<Tratament> resultSegment=await Table.ExecuteQuerySegmentedAsync(query,token);
                u.AddRange(resultSegment.Results);
            }while(token!=null);
            foreach( Tratament i in u)
            {
                if(i.icon==2)
                {
                    int l=0;
                   foreach( string s in x)
                   {
                       if(s==i.RowKey)
                       {
                           l=1;
                           break;
                       }

                   }
                   if(l==0)
                   {
                       x.Add(i.RowKey);
                   }
                    
                }
            }
            foreach(string s in x)
            {
                a=a+"/"+s;
               
            }




           return a;
        }

        public async Task<List<Tratament>> GetAll()
        {
            var u = new List<Tratament>();
            TableQuery<Tratament> query=new TableQuery<Tratament>();
            TableContinuationToken token=null;
            do{
                TableQuerySegment<Tratament> resultSegment=await Table.ExecuteQuerySegmentedAsync(query,token);
                u.AddRange(resultSegment.Results);
            }while(token!=null);
            return u;

        }




        public async Task<List<Tratament>> GetSort()
        {
            var u = new List<Tratament>();
            TableQuery<Tratament> query=new TableQuery<Tratament>();
            TableContinuationToken token=null;
            do{
                TableQuerySegment<Tratament> resultSegment=await Table.ExecuteQuerySegmentedAsync(query,token);
                u.AddRange(resultSegment.Results);
            }while(token!=null);

            u = u.OrderBy(x => x.timeAdministrare).ToList();
            return u;

        }

         public async Task<List<Tratament>> Get()
        {
            var u = new List<Tratament>();
            var v= new List<Tratament>();
            TableQuery<Tratament> query=new TableQuery<Tratament>();
            TableContinuationToken token=null;
            do{
                TableQuerySegment<Tratament> resultSegment=await Table.ExecuteQuerySegmentedAsync(query,token);
                u.AddRange(resultSegment.Results);
            }while(token!=null);
            foreach(Tratament i in u)
            {
                if(i.icon==1 ||i.icon==2 )
                {
                    v.Add(i);
                }
            }


            return v;

        }
        public async Task<List<Tratament>> GetById(string id)
        {
            var u = new List<Tratament>();
            var v = new List<Tratament>();
            TableQuery<Tratament> query=new TableQuery<Tratament>();
            TableContinuationToken token=null;
            do{
                TableQuerySegment<Tratament> resultSegment=await Table.ExecuteQuerySegmentedAsync(query,token);
                u.AddRange(resultSegment.Results);
            }while(token!=null);
            foreach(Tratament i in u)
            {
                if(i.RowKey==id)
                v.Add(i);
            }

            return v;

        }

        private async  Task InitTable()
        {
            string conect ="DefaultEndpointsProtocol=https;AccountName=datc;AccountKey=IK3FdIeFdddY9G4O4iRo/z+68xaHta1/pvoI4Bo4v2rDkCYJdLCedfpPOtSSCjisEdjdw0fFYwScoHKmvZbcvQ==;EndpointSuffix=core.windows.net";
            var acc=CloudStorageAccount.Parse(conect);
            Client=acc.CreateCloudTableClient();
            Table=Client.GetTableReference("tratament");
            await Table.CreateIfNotExistsAsync();

             string conect1 ="DefaultEndpointsProtocol=https;AccountName=datc;AccountKey=IK3FdIeFdddY9G4O4iRo/z+68xaHta1/pvoI4Bo4v2rDkCYJdLCedfpPOtSSCjisEdjdw0fFYwScoHKmvZbcvQ==;EndpointSuffix=core.windows.net";
            var acc1=CloudStorageAccount.Parse(conect1);
            Client1=acc1.CreateCloudTableClient();
            Table1=Client1.GetTableReference("transmisie");
            await Table1.CreateIfNotExistsAsync();
        }

       
    }
}