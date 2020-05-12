#include <stdio.h>
#include <stdlib.h>

void clrsrc() {
	system("clear");
}

int main() {
	clrsrc();
	int a = 4, b = 5;
	printf("Value of a is %d and b is %d\n", a, b);
	printf("Sum of %d and %d is %d\n", a, b, ( a + b ));
	return 0;
}
