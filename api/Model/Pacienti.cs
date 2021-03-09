using Microsoft.WindowsAzure.Storage.Table;

namespace api{

    public class Pacienti: TableEntity
    {
        public Pacienti(string CNP, string nume)
        {
            this.PartitionKey=CNP;
            this.RowKey=nume;
        }
        public Pacienti(){}
    
        public string prenume{get;set;}
        public int varsta{get;set;}
        public string diagnostic{get;set;}
        public string sex{get;set;}



    }

}