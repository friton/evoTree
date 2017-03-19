import json, sys, os


class JSON_generator ():
	def __init__ (self,path,path2):
		'''Constructeur, prend deux chemins et lis les fichier associé'''
		self.f = open (path,'r',encoding = 'utf-8')
		self.f2 = open (path2,'r',encoding = 'utf-8')
	def lecture (self,scale = 1.0):
		'''
		   Sortie : deux dictionnaire d (contiens les point et leurs fils) et d2 (contient les points et leurs coordonnées x et y) 
		'''
		d = {}
		d2 = {}
		for line in self.f:
			line = line.strip()
			line = line.split()
			p = int(line[0])
			f = int(line[1])
			if not p in d.keys():
				d[p] = []
				d[p].append(f)
			else:
				d[p].append(f)
		self.f.close()
		for line2 in self.f2:
			line2 = line2.split()
			if not int(line2[0]) in d2.keys():
				p2 =int(line2[0])
				d2[p2]={}
				d2[p2]["x"]=(float(line2[1])*float(scale))
				d2[p2]["y"]=(float(line2[2])*float(scale))
		self.f2.close()
		return (d,d2)

	def create_json(self,d,d2):
		'''
		   Entree: les deux dictionnaires sortie par lecture
		   Création d'un fichier JSON à partir des données des deux dictionnaires fournis 
		'''
		for k,v in d.items():
			d2[k]["fils"] = v
			if len(v) > 1:
				print (k)
		with open('./JSON.json','w') as fp:
			fp.write(json.dumps(d2,indent=4, sort_keys=True))
	

def ajout (path,path2):
	'''Fonction pour ajouter Point devant le numéro du point (réalisé après la création du JSON car sinon, lorsque le JSON est trié (sort_keys=True), le tri se fait selon un ordre alphabétique (ex : 1000 avant 23) et non numérique)'''
	f = open (path,'r',encoding = 'utf-8')
	f2 = open (path2,'w',encoding = 'utf-8')
	i = 0
	for ligne in f:
		if len(ligne.split()) == 2 and ligne.split()[1] == '{':
			point = ligne.split()[0]
			p = point.split('"')
			point = '    "Point'+str(p[1])+'": {\n'
			f2.write (point)
		else :
			f2.write (ligne)



	f.close()
	f2.close()

try:
    '''Argument à donner au script et execution de ce dernier'''
    path = sys.argv[1]
    path2 = sys.argv[2]
    path3 = './JSON.json'
    output_file = sys.argv[3]
    try :
       scale = sys.argv[4]
    except :
       scale = None
    if output_file == 'JSON.json':
       raise ValueError('\nLa sortie ne peut pas être JSON.json\n')


    j = JSON_generator(path,path2)
    if scale != None:
       d,d2 = j.lecture(scale)
    else :
       d,d2 = j.lecture()
    j.create_json(d,d2) 
    ajout (path3,output_file)
    os.system('rm JSON.json')

except Exception as e:
    print("\n",e,"\n")
    print("#################################################")
    print("# How to use this program :")
    print("# > python3 JSON_creation.py file.edges.txt file.points.txt output.json(autre que JSON.json) + optionnel : scale(doit être un int ou float)")
    print("#################################################")








