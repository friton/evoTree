def xml (path,path2):
	f = open (path,'r',encoding = 'utf-8')
	f2 = open (path2,'w',encoding = 'utf-8')
	entete = "<?xml version = \"1.0\" encoding=\"UTF-8\" ?>"
	p1 = ("<Point>")
	p2 = ("</Point>")
	f2.write(entete+'\n')
	f2.write(p1+'\n')
	for ligne in f:
		
		ligne = (ligne.split())
		if len(ligne) == 2 and ligne[1] == '{':
			fils3 = []
			point = ('<'+str(ligne[0].split('"')[1])+'>')
			point2 = ('</'+str(ligne[0].split('"')[1])+'>')
		elif ligne[0] == '"x":':
			x = ('<'+str(ligne[0].split('"')[1])+'>')
			x2 = ('</'+str(ligne[0].split('"')[1])+'>')
			value = (str(ligne[1]))
		elif ligne[0] == '"y":':
			y = ('<'+str(ligne[0].split('"')[1])+'>')
			y2 = ('</'+str(ligne[0].split('"')[1])+'>')
			value2 = (str(ligne[1]))
		elif ligne[0] == '"fils":' :
			fils = ('<'+str(ligne[0].split('"')[1])+'>')
			fils2 = ('</'+str(ligne[0].split('"')[1])+'>')
		
		elif ligne[0] != '}' and ligne[0] != '},' and ligne[0] != '],' and ligne[0] != '{':
			if ligne[0][-1] == ',':
				fils3.append(str(ligne[0][:-1]))
			else:	
				fils3.append(str(ligne[0]))
		elif ligne[0] == '},':
			f2.write('\t'+point+'\n\t\t'+x+value+x2+'\n\t\t'+y+value2+y2+'\n\t\t'+fils+str(fils3)+fils2+'\n\t'+point2+'\n')
		
	f2.write(p2+'\n')
	f.close()
	f2.close()






path = '/home/siekaniec/Bureau/space_colonisation/JSON-ok.json'
path2 = '/home/siekaniec/Bureau/space_colonisation/XML.xml'
xml (path,path2)
