using Microsoft.WindowsAzure.Storage.Table;
using System;
using System.Collections.Generic;
namespace api{

    public class Tratament: TableEntity
    {
        public Tratament(string idTratament, string idPacient)
        {
            this.PartitionKey=idTratament;
            this.RowKey=idPacient;
        }
        public Tratament(){}
        public string idMedicament1{get;set;}
        public string idMedicament2{get;set;}
        public string idMedicament3{get;set;}
        public string idMedicament4{get;set;}
        public string idDoctor{get;set;}
        public DateTime timeAdministrare{get;set;}
        public int icon{get; set;}
    

       


    }

}