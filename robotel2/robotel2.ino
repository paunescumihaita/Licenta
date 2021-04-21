#include <LiquidCrystal.h> 
int Contrast=75;
 LiquidCrystal lcd(12, 11, 5, 7, 3, 2);  
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

  delay(3000);
  
}




void setup() {
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
 Serial.begin(9600);
   Serial.begin(9600);
   analogWrite(6,Contrast);
  lcd.begin(16, 2);
    delay(10000);
    lcd.setCursor(0, 0);
     lcd.print("000");
     delay(1000);

}
int k=1;
int l=0;
int fact=210;
int facti=100;
int fact1=240;
int facti1=150;
int ls=0,ld=0,nr_sal=1;
void fata()
{
  while(1){
if(digitalRead(48)==0&&digitalRead(49)==0&&digitalRead(50)==0){
    while(digitalRead(48)==0&&digitalRead(49)==0&&digitalRead(50)==0){}
  l++;    }
  if(l==nr_sal)
  {
    ld==1;ls==0;
  }
  else
  if(l%2==0)
  {
    ld=0;ls=0;
  }
  else {ls=1;ld=0;}
  lcd.clear();
  lcd.print(l);
   if(digitalRead(48)==1&&digitalRead(49)==1&&digitalRead(50)==1  &&l==2)
{
  OCR0A=0;
  OCR2A=0;
  OCR0B=0;
  OCR2B=0;
  delay(1000);
  break;
 
}
else
if(digitalRead(50)==1  &&ld==0)
{
  
  OCR2A=0;
  OCR0B=0;
  OCR2B=160;
  OCR0A=100;
}
else{
if(digitalRead(48)==1 &&ls==0  )
{ OCR2B=0;
  OCR0A=0;
  OCR2A=100;
  OCR0B=160;
  
}

else

{
  OCR0A=0;
  OCR2A=0;
  OCR0B=60;
  OCR2B=60;
}}
}
spate();
}



void spate()
{
  while(1){
if(digitalRead(51)==0&&digitalRead(52)==0&&digitalRead(53)==0){
    while(digitalRead(51)==0&&digitalRead(52)==0&&digitalRead(53)==0){}
  k++;    }


  
   lcd.clear();
  lcd.print(k);
 if(digitalRead(51)==1&&digitalRead(52)==1&&digitalRead(53)==1 &&k!=2)
{
  OCR0A=0;
  OCR2A=0;
  OCR0B=0;
  OCR2B=0;
  delay(1000);
  break;
}
else
if(digitalRead(51)==1  )
{
  OCR2A=0;
  OCR0B=0;
  OCR2B=100;
  OCR0A=160;

}
else{
if(digitalRead(53)==1 &&k!=2)
{  OCR2B=0;
  OCR0A=0;
  OCR2A=160;
  OCR0B=100;
  
}

else

{
  OCR0B=0;
  OCR2B=0;
  OCR0A=60;
  OCR2A=60;

}}
  
}
k=1;
l=1;
  fata();

}

int t=nr_sal+1;
void loop() {
if(digitalRead(48)==0&&digitalRead(49)==0&&digitalRead(50)==0){
    while(digitalRead(48)==0&&digitalRead(49)==0&&digitalRead(50)==0){}
  l++;    }
if(nr_sal==l)
{
  ld=1;
  ls=0;
}
else if(l%2==0){ls=0;ld=0;}
else {ld=0;ls=1;}

  
  lcd.clear();
  lcd.print(l);
   if(digitalRead(48)==1&&digitalRead(49)==1&&digitalRead(50)==1  &&l==t )
{
  OCR0A=0;
  OCR2A=0;
  OCR0B=0;
  OCR2B=0;
  delay(1000);
//  break;
 
}
else
if(digitalRead(50)==1  &&ld==0 )
{
  
  OCR2A=0;
  OCR0B=0;
  OCR2B=160;
  OCR0A=100;
}
else{
if(digitalRead(48)==1 &&ls==0 )
{ OCR2B=0;
  OCR0A=0;
  OCR2A=100;
  OCR0B=160;
  
}

else

{
  OCR0A=0;
  OCR2A=0;
  OCR0B=60;
  OCR2B=60;
}}
}
