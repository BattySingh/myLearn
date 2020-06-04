invites = ['suraj', 'mohan', 'sohan']
invite1 = f'You are invited, { invites[0].title() }'
invite2 = f'You are invited, { invites[1].title() }'
invite3 = f'You are invited, { invites[2].title() }'

print(invite1)
print(invite2)
print(invite3)

notCome = 'suraj'
invites.remove(notCome)
print(f"{notCome.title()} won't be able to come")

invites.append('sakura')
invite1 = f'You are invited, { invites[0].title() }'
invite2 = f'You are invited, { invites[1].title() }'
invite3 = f'You are invited, { invites[2].title() }'
print(invite1)
print(invite2)
print(invite3)

invites.insert(0, 'madara')
invites.insert(3, 'sasuke')
invites.append('naruto')
print(invites)