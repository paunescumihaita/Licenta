#include "Conexiune.h"
#include <Wire.h> 
 int ks=0,kd=0;
 int k=0;
int l=0;

int ls=0,ld=0,nr_sal=1;
int v;
void pwm()
{
  
TCCR0A|=(1<<WGM01)|(1<<WGM00);
TCCR0A |= (1 <<COM0A1)|(1 <<COM0B1) ;
TCCR0B |= (1 <<CS01) ;
TCCR2A|=(1<<WGM21)|(1<<WGM20);
TCCR2A |= (1 <<COM2A1)|(1 <<COM2B1) ;
TCCR2B |= (1 <<CS21) ;

OCR0A=0;
OCR0B=0;
OCR2A=0;
OCR2B=0;

 // delay(3000);
  
}




void setup() {
    Serial.begin(9600);
Serial.println("ffff1");
 c.Conexiune_init();
 Serial.println("ffff2");
  noInterrupts();
  pwm();
   pinMode(9, OUTPUT);
   pinMode(10, OUTPUT);
   pinMode(4, OUTPUT);
   pinMode(13, OUTPUT);
  pinMode(48, INPUT);
 pinMode(49, INPUT);
 pinMode(50, INPUT);
 pinMode(51, INPUT);
 pinMode(52, INPUT);
 pinMode(53, INPUT);
 pinMode(2, OUTPUT);

   


  if(nr_sal%2==0)
  {
    v=nr_sal;
  }
  else
  {
    v=nr_sal+1;
  }

      interrupts();
 //    delay(3000);

}

void fata()
{while(1){
if( digitalRead(48)==0 &&digitalRead(49)==0  && digitalRead(50)==0){
    while( digitalRead(48)==0&&digitalRead(49)==0 && digitalRead(50)==0){}
  l++;   
  if(l%2==1)
  {
    digitalWrite(2, HIGH);
  }
  else
  {
    digitalWrite(2, LOW);
  }

  
  }
  /*
if(nr_sal==l)
{
  ld=1;
  ls=0;
}
else if(l%2==0){ls=0;ld=0;}
else {ld=0;ls=1;}

  
  lcd.clear();
  lcd.print(l);
  */
    if(l%2==0)
  {ls=0;ld=0;}
  else
  if(l==nr_sal)
  {
    ld=1;ls=0;
  }
  else
  if(nr_sal==l+1)
  {
    ld=0;ls=1;
  }
  else
  {
    ld=1;ls=1;
  }
  
   if(digitalRead(48)==1&&digitalRead(49)==1&&digitalRead(50)==1   &&l==v )
{
  OCR0A=0;
  OCR2A=0;
  OCR0B=0;
  OCR2B=0;
  delay(1000);
  break;
 
}
else
if(digitalRead(50)==1  &&ld==0 )
{
  
  OCR2A=0;
  OCR0B=0;
  OCR2B=170;
  OCR0A=170;
}
else{
if(digitalRead(48)==1 &&ls==0 )
{ OCR2B=0;
  OCR0A=0;
  OCR2A=170;
  OCR0B=170;
  
}

else

{
  OCR0A=0;
  OCR2A=0;
  OCR0B=60;
  OCR2B=60;
}}
}
}


void spate()
{
   while(1){
if(digitalRead(51)==0&&digitalRead(52)==0&&digitalRead(53)==0){
    while(digitalRead(51)==0&&digitalRead(52)==0&&digitalRead(53)==0){}
  k++;  if(k%2==1)
  {
    digitalWrite(2, HIGH);
  }
  else
  {
    digitalWrite(2, LOW);
  }
   }
  if(k==1)
  {
    if(nr_sal%2==0)
    {
      ks=1;kd=0;
    }
    else
    {
      ks=0;kd=1;
    }
  }
  else 
  if(k%2==0)
  {
    ks=0;kd=0;
  }
  else
    if(k%2==1)
    {
       ks=1;kd=1;
    }


  

 if(digitalRead(51)==1&&digitalRead(52)==1&&digitalRead(53)==1 &&k==(v))
{
  OCR0A=0;
  OCR2A=0;
  OCR0B=0;
  OCR2B=0;
  delay(10000);
  break;
}
else
if(digitalRead(51)==1 &&ks==0  )
{
  OCR2A=0;
  OCR0B=0;
  OCR2B=170;
  OCR0A=170;

}
else{
if(digitalRead(53)==1 &&kd==0)
{  OCR2B=0;
  OCR0A=0;
  OCR2A=170;
  OCR0B=170;
  
}

else

{
  OCR0B=0;
  OCR2B=0;
  OCR0A=60;
  OCR2A=60;

}}
  
}

}

int t=nr_sal+1;
void loop() {

Serial.println("ffff");
   Conexiune();
   Serial.println("ffdddddddddff");
    
nr_sal=c.partitionKey;
   Serial.println(nr_sal);
c.partitionKey=NULL;
 if(nr_sal%2==0)
  {
    v=nr_sal;
  }
  else
  {
    v=nr_sal+1;
  }
 fata();
 spate();


}
