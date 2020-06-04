name = "Eric"
message = f"Hello {name}, would you like to learn some Python today?"

print(message)
print(f"Lowercase: {name.lower()}")
print(f"Uppercase: {name.upper()}")
print(f"Title: {name.title()}")

famous_person = "Albert Einstein"
message = f'{famous_person} once said, "A person who never made a mistake never tried anything new."'
print(message)

name = "    \tJurassic\n"
print(name)
print(name.rstrip())
print(name.lstrip())
print(name.strip())