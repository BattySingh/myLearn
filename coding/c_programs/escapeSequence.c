#include <stdio.h>
#include <stdlib.h>

void gotoxy(int x,int y)	
{
	printf("%c[%d;%df",0x1B,y,x);
}

void clrsrc() {
	system("clear");
}

int main() {
	clrsrc();
	printf("Juras\nsic");
	printf("Juras\tsic");
	printf("Juras\\sic");
	printf("Juras\bsic");
	//printf("Juras\rsic");
	printf("Juras\"sic");
	
	gotoxy(30, 10);
	printf("I am success\n");
	
	return 0;
}
