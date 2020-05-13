#include <stdio.h>
#include <stdlib.h>

void clrsrc() {
	system("clear");
}

int main() {
	clrsrc();
	int x = 3, y;
	x++;
	printf("Value of x: %d\n", x);
	
	y = ++x;
	printf("Value of x: %d and y: %d\n", x, y);
	return 0;
}
