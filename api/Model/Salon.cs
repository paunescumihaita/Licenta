using Microsoft.WindowsAzure.Storage.Table;
using System;
using System.Collections.Generic;
namespace api{

    public class Salon: TableEntity
    {
        public Salon(string isPacient, string salon)
        {
            this.PartitionKey=isPacient;
            this.RowKey=salon;
        }
        public Salon(){}
      
      
    

       


    }

}