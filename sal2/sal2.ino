
#include <LiquidCrystal_I2C.h>




const String ssid  = "HUAWEI-NnFn";
const String password = "m6n87sAn";
//http://www.arduino.cc/latest.txt
const String path = "/s.php";
const String server = "paunescumihai.ro";
const String request = String("GET ") + path + " HTTP/1.1\r\n" + "Host:" + server + "\r\n" + "Connection: keep-alive\r\n\r\n";
 String   requestLength  = String(request.length());
char v[450];
const int timeout = 2000;
const char* nume="Paunescu";
const char* prenume="Mihaita";
const char* CNP="1980214";

#include <LiquidCrystal.h> 
int Contrast=100;
 LiquidCrystal lcd(12, 11, 5, 10,9 , 8);  
#include <SoftwareSerial.h>
SoftwareSerial esp8266 (2, 3); //Arduino TX (ESP8266 RX) connected to Arduino Pin 2, Arduino RX(ESP8266 TX) connected to Arduino Pin 
//
  char *p=malloc(sizeof(char*));
 char *r=malloc(sizeof(char*)); 

void setup() {


  Serial.begin(9600);
  esp8266.begin(9600);
 analogWrite(6,Contrast);
     lcd.begin(16, 2);
  lcd.print("aici");
pinMode(4,INPUT);

  setupESP8266();
  connectToWiFi();





}






  







void loop() {
  
  

while(1){
Serial.println("GGGGG");
strcpy(p,"");
strcpy(r,"");
Serial.println(requestLength);
Serial.println(request);
  startTCPConnection();
  int k=0;int i=0,pi=0,ri=0;
  const String res = sendGetRequest();
 
  //
  ////
    for(i=0;i<res.length();i++){
      if(res.charAt(i-1)=='"')k++;
     if(k==3){p[pi]=res.charAt(i);pi++;}    
     if(k==7){r[ri]=res.charAt(i);ri++;}


     
    }
   p[pi-1]=NULL;
    r[ri-1]=NULL;
Serial.println(p);
Serial.println(res);
Serial.println(r);
if(strcmp(CNP,r)==0)break;
 if(res.indexOf("1980213") > 0)break;
}closeTCPConnection();
if(strcmp(CNP,r)==0){
lcd.clear();
lcd.setCursor(1, 0);
 
  lcd.print(nume);
lcd.setCursor(1, 1);
 
  lcd.print(prenume);
 while(digitalRead(4)!=1)
 {
  
 }
 delay(200);
 lcd.clear();
  String a="/sd.php?p="+String(r)+"&r="+String(r);



    String request1 = String("GET ") +a + " HTTP/1.1\r\n" + "Host:" + server + "\r\n" + "Connection: keep-alive\r\n\r\n";
    Serial.println(request1.length());
    startTCPConnection();
    String ad=sendGetRequest1(request1);
    closeTCPConnection();
    Serial.println(ad);
 
 strcpy(p,"");
strcpy(r,"");

}

}

String atCommand(String command, int timeout) {
  String response PROGMEM = "";
  esp8266.println(command);
 

  long int time = millis();

  while ( (time + timeout) > millis() ) {
    while (esp8266.available()) {
      char c = esp8266.read();
      response += c;
    }
  }

  Serial.println(response);
  return response;
}


void setupESP8266() {
  atCommand("AT+RST", timeout);
  atCommand("AT+CWMODE=1", timeout);
}

void connectToWiFi() {
  String connect PROGMEM = "AT+CWJAP=\"" + ssid + "\",\"" + password + "\"";
  atCommand(connect, 6000);
  atCommand("AT+CIFSR", timeout);
}

void startTCPConnection() {
  String connect PROGMEM = "AT+CIPSTART=\"TCP\",\"" + server + "\",80";
  atCommand(connect, timeout);
}

void closeTCPConnection() {
  atCommand("AT+CIPCLOSE", timeout);
}

String sendGetRequest() {
  atCommand("AT+CIPSEND=70" , timeout);
  String response  = atCommand(request, 6000);

  return response;
}

String sendGetRequest1(String a) {
  atCommand("AT+CIPSEND=95" , timeout);
  String response  = atCommand(a, 6000);

  return response;
}
