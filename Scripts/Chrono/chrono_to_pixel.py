###########################################################################
######    Récupération des valeurs en pixels des temps géologiques    #####
###########################################################################


# Récupération des dates des Eons en pixels:

print("////////////////////")
print("/////   Eons   /////")
print("////////////////////")

#Date des Eons en milliards d'années
datesEons_milliardsAnnees = [4, 2.5, 0.541]
datesEons_pixels = [(4.54 - i)*10000 for i in datesEons_milliardsAnnees]

for i in datesEons_pixels:
	if i < 22700:
		print("pixels",i)
	else:
		canvas2 = i - 22700
		print("pixels:",canvas2, "(canvas 2)")

# Récupération des dates des Eres en pixels:

print("\n////////////////////")
print("/////   Eres   /////")
print("////////////////////")

#Date des Eres en milliards d'années
datesEres_milliardsAnnees = [4,3.6,3.2,2.8,2.5,1.6,
							1,0.541,0.251902,0.066]
datesEres_pixels = [(4.54 - i)*10000 for i in datesEres_milliardsAnnees]


for i in datesEres_pixels:
	if i < 22700:
		print("pixels",i)
	else:
		canvas2 = i - 22700
		print("pixels:",canvas2, "(canvas 2)")

# Récupération des dates des Périodes en pixels:

print("\n//////////////////////////")
print("///////  Périodes  ///////")
print("//////////////////////////")

#Date des Périodes en milliards d'années
datesPeriodes_milliardsAnnees = [2.5,2.3,2.050,1.8,1.6,1.4,1.2,1,
								0.72,0.635,0.541,0.4854,0.4438,
								0.4192,0.3589,0.2989,0.251902,
								0.2013,0.145,0.066,0.02303,0.00258]
datesPeriodes_pixels= [(4.54 - i)*10000 for i in datesPeriodes_milliardsAnnees]

for i in datesPeriodes_pixels:
	if i < 22700:
		print("pixels",i)
	else:
		canvas2 = i - 22700
		print("pixels:",canvas2, "(canvas 2)")

# Récupération des dates des Epoques en pixels:

print("\n////////////////////////")
print("//////  Epoques   //////")
print("////////////////////////")

#Date des Epoques en milliards d'années
datesEpoques_milliardsAnnees = [0.541,0.521,0.509,0.497,
			                   0.4854,0.470,0.4584,0.4438,0.4334,
			                   0.4274,0.423,0.4192,0.3933,0.3827,
			                   0.3589,0.3232,0.2989,0.27295,0.2591,
			                   0.251902,0.2472,0.237,0.2013,0.1741,
			                   0.1635,0.145,0.1005,0.066,0.056,
			                   0.0339,0.02303,0.005333,0.00258,
			                   0.0000117]
datesEpoques_pixels = [(4.54 - i)*10000 for i in datesEpoques_milliardsAnnees]

for i in datesEpoques_pixels:
	if i < 22700:
		print("pixels",i)
	else:
		canvas2 = i - 22700
		print("pixels:",canvas2, "(canvas 2)")