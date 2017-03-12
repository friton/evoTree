import json


class JSON_generator ():
	def __init__ (self,path,path2):
		self.f = open (path,'r',encoding = 'utf-8')
		self.f2 = open (path2,'r',encoding = 'utf-8')
	def lecture (self):
		d = {}
		d2 = {}
		for line in self.f:
			line = line.strip()
			line = line.split()
			p = "Point_"+str(int(line[0]))
			f = "Point_"+str(int(line[1]))
			if not p in d.keys():
				d[p] = []
				d[p].append(f)
			else:
				d[p].append(f)
		self.f.close()
		for line2 in self.f2:
			line2 = line2.split()
			if not int(line2[0]) in d2.keys():
				p2 ="Point_"+str(int(line2[0]))
				d2[p2]={}
				d2[p2]["x"]=(float(line2[1]))
				d2[p2]["y"]=(float(line2[2]))
		self.f2.close()
		return (d,d2)

	def create_json(self,d,d2):
		for k,v in d.items():
			d2[k]["fils"] = v
			if len(v) > 1:
				print (k)
		with open('/home/siekaniec/Bureau/space_colonisation/JSON.json','w') as fp:
			fp.write(json.dumps(d2,indent=4))
		

path = '/home/siekaniec/Bureau/space_colonisation/POINTS.txt.results.edges.txt'
path2 = '/home/siekaniec/Bureau/space_colonisation/POINTS.txt.results.points.txt'
bob = JSON_generator(path,path2)
d,d2 = bob.lecture()
bob.create_json(d,d2)
































