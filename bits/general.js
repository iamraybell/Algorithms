/*

bit = 1 or 0 (on or off)
bytes = 8 bits


00010111 = 23

In twos compliment, bit in first (128 in my case) position determines if it is positive or negative.

Two convert to -23:

	1) flip bits
	2) add one

	so given 00010111 (23)

	1) flip bits
		00010111= 11101000

	2) add one
		11101000 = 11101001

	So 11101001 is -23. Cool!
	To convert back:

	1) Flip bits
	2)Add One


bitwise operations:

| =  OR: returns 1 if either bit is one.
^ -  XOR: returns 1 if exactly 1 bit is one.
& =  And: Returns 1 if both bits are one.
~ = Not: Inverts bits
>> = Right shift (same as roughly dividing by 2)
<< = Left shift (same as rough;y multiplying by 2)



masking

get nth bit:

(x&(1<< i))!= 0

set nth bit:

x| (1<< i)


*/



