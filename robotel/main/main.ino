#include "Conexiune.h"

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  Serial.println("ss");
  c.Conexiune_init();
   
 Serial.println("ss");

 

}

void loop() {
a();

}

void a()
{
  int i=0;
  
    i++;
    Serial.println("  ");
 
    Conexiune();
    c.partitionKey=NULL;
    
    
  
}
