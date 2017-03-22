#!/usr/bin/env python
from random import *
from point3d import attr_point,tree_point


class space_colonization:
    def __init__(self,min_radius, max_radius):
        """
        Takes:
            - min_radius (float): radius under which an attraction point becomes inactive
            - max_radius (float): radius above which an attraction point does not attract
        """
        self.min_radius  = min_radius
        self.max_radius = max_radius
        
        self.attr_points = [] ##contains attraction points
        self.nb_active_attr_points = 0
        
        self.tree_points = [] ##contains tree points which ids are teir index in the list
        
        self.tree_points.append(tree_point(0.,0.,0.,0,None))
        
        self.tree_points_to_check = [0] ##id of the tree point to check for the attraction point
        

    def add_attr_point(self,x,y,z):
        """
        Adds a new attraction point to the system
        
        Takes:

            - x (float)
            - y (float)
            - z (float)
        """
        self.attr_points.append(attr_point(x,y,z,self.min_radius,self.max_radius))
        self.nb_active_attr_points += 1
    
    def get_closest_tree_points(self,max_x,min_x):
        """
        Compute the closest tree point for each attraction point and return them, organized by tree point
        
        Returns:
            (dict): keys: tree_point id; values: list of attr_point id
            
        """
        dclosest_point = {}
        
        ptocheck = [self.tree_points[j] for j in  self.tree_points_to_check ] ##list of the treepoints to check        

        for i,p in enumerate(self.attr_points):
            if p.status == False:
                continue
            
            c = p.get_closest_point(ptocheck,max_x,min_x)
            if c[0] is None:
                if p.status == False:##the point is no longer active
                    self.nb_active_attr_points -= 1
        
            elif c[1] != True:##linking the attraction point to the tree point
                if not dclosest_point.has_key(c[0]):
                    dclosest_point[c[0]] = []
                    
                dclosest_point[c[0]].append(i)
        
        return dclosest_point
    
    def grow_tree(self,max_x,min_x):
        """
        perform one step of growth


        Returns:
            (int): -1 if stop conditions were encountered; 0 if no stop condition were encountered

        """
        if self.nb_active_attr_points == 0:
#            print "No active attraction point left."
            return -1 
        
        dclosest_point = self.get_closest_tree_points(max_x,min_x)
	#print (len(dclosest_point))
        
        if self.nb_active_attr_points == 0:
#            print "No active attraction point left."
            return -1 
        
        if len(dclosest_point) == 0:
#            print "No active attraction point in range."
            return -1
        
        self.tree_points_to_check  = [] ##initializing the list of points to check at the next iteration
        
        for k in dclosest_point.keys():
            
            self.tree_points_to_check.append(k) ##if the point has been selected this turn, it might be next turn
            
            if self.tree_points[k].alive: ##only perform the check if this node is alive
                new_id = len(self.tree_points)
            
                self.tree_points.append(self.tree_points[k].create_son([self.attr_points[i] for i in dclosest_point[k]]))
            
                self.tree_points[-1].id = new_id
            
                self.tree_points_to_check.append(new_id) ##if the point is new, we need to check it

            #self.tree_points[k].son_list.append(new_id) ##we inform the parent of its new child's id
            

        return 0
    
    
    def write_tree(self,filename):
        """
        Takes:
            - filename (str): prefix of the name of the files were the points and edges will be written
        """
        
        OUT_POINT = open(filename + ".points5-30v1.txt","w")
        OUT_EDGE = open(filename + ".edges.5-30v1.txt","w")
        
        for p in self.tree_points:
            OUT_POINT.write(str(p.id) + " " + str(p.x) + " " + str(p.y) + " " + str(p.z) + "\n")
            
            if not p.parent is None:
                OUT_EDGE.write(str(p.parent) + " " + str(p.id) + "\n")
        
        OUT_POINT.close()
        OUT_EDGE.close()
    
        return
    
    def read_attr_points(self,filename):
        """
        Takes:
            - filename (str): name of the file containing the attraction points
        """
        IN = open(filename,"r")
        
        for l in IN:
            sl = [float(i.strip()) for i in l.split()]
            
            self.add_attr_point(sl[0],sl[1],sl[2])
        
        IN.close()
        
        return

    def getAgeMap(self):

        AgeMap = {0:0}
        for p in self.tree_points:
            if AgeMap.has_key(p.id):
                continue

            if not AgeMap.has_key(p.parent):
#                print "pb finding the parent",p.parent, "of", p.id
                AgeMap[p.id] = 0
            else:
                AgeMap[p.id] = AgeMap[p.parent] + 1

        return AgeMap
    

if __name__ == "__main__":
    
    from random import random
    
    import sys
        
    help_str = """
    Takes as argument:
        - min radius for the attraction point (radius at which they disappear) (should not be under 1)
        - max radius for the attraction point (radius at which they attract) (should not be under 20, better to go with 50...)
        - max number of iteration of the program (to avoid infinite loop...)
        - name of a file containing attraction points (one per line; each line is a list of three float separated by a space) (if not specified, 100 points will be drawn at random in a 100*100*100 cube centered on (0,0,0))
    """
    
    min_rad = 2
    max_rad = 25
    IMAX = 1000

    attr_file = None

    if len(sys.argv) < 4:
        print help_str
        exit(1)
        
    else:
        
        try:
            min_rad = float(sys.argv[1])
            max_rad = float(sys.argv[2])
            IMAX = int(sys.argv[3])
        except:
            print help_str
            exit(1)
    
    
    
    SC = space_colonization(min_rad,max_rad)
    
    
    if len(sys.argv) > 4:
        attr_file = sys.argv[4]
#        print "reading attraction points from",attr_file
        SC.read_attr_points(attr_file)
    else:
        
 #       print "generating 1000 random attr points"
        for i in range(251101):
            x = (random() * 38000.)
            y = (random() * 500.)-250.
            z = 0#(random() * 100.) - 50.
            
            SC.add_attr_point(x,y,z)
    
    Center=tree_point(-1.,0.,0.,0,None)
    PROBA_XTINCT = [0.2,0.6,0.5,0.8,0.55,0.4]
    SEUIL_XTINCT = [31000,33545,34300,35465,35860,37340]
    SEUIL_XTINCT_AREA = []
    PROBA_XTINCT_AREA = []
    for i,sx in enumerate(SEUIL_XTINCT):
          SEUIL_XTINCT_AREA.append(sx-100)
          SEUIL_XTINCT_AREA.append(sx-90)
          SEUIL_XTINCT_AREA.append(sx-80)
          SEUIL_XTINCT_AREA.append(sx-70)
          SEUIL_XTINCT_AREA.append(sx-60)
          SEUIL_XTINCT_AREA.append(sx-50)
          SEUIL_XTINCT_AREA.append(sx-40)
          SEUIL_XTINCT_AREA.append(sx-30)
          SEUIL_XTINCT_AREA.append(sx-20)
          SEUIL_XTINCT_AREA.append(sx-10)
          SEUIL_XTINCT_AREA.append(sx)
          PROBA_XTINCT_AREA.append(PROBA_XTINCT[i]/11)
          PROBA_XTINCT_AREA.append(PROBA_XTINCT[i]/10)
          PROBA_XTINCT_AREA.append(PROBA_XTINCT[i]/9)
          PROBA_XTINCT_AREA.append(PROBA_XTINCT[i]/8)
          PROBA_XTINCT_AREA.append(PROBA_XTINCT[i]/7)
          PROBA_XTINCT_AREA.append(PROBA_XTINCT[i]/6)
          PROBA_XTINCT_AREA.append(PROBA_XTINCT[i]/5)
          PROBA_XTINCT_AREA.append(PROBA_XTINCT[i]/4)
          PROBA_XTINCT_AREA.append(PROBA_XTINCT[i]/3)
          PROBA_XTINCT_AREA.append(PROBA_XTINCT[i]/2)
          PROBA_XTINCT_AREA.append(PROBA_XTINCT[i])
    j = 0
    count = 0
    vseuil = 0 
    while j < IMAX:
	if j%50 == 0:
		print j
		#a=[] 	
		#print (len(SC.tree_points_to_check))
		
		
        ##        SC.tree_points_to_check is what we need to modify... We remove some of them when they are at a given distance from the center
        Lextinct = []
        for p in SC.tree_points_to_check:
            
            if SC.tree_points[p].alive :
                dist = SC.tree_points[p].dist_from(Center)         
                
                for i,seuil in enumerate(SEUIL_XTINCT_AREA):
                    if dist > seuil:
                        distParent = SC.tree_points[ SC.tree_points[p].parent ].dist_from(Center) ##distance of the parent to the center
    
                        if distParent < seuil:
                            res = random()
                            if res < PROBA_XTINCT_AREA[i]: ##extinction
                                if i != vseuil:
                                    vseuil=i
                                    count = 0
                                if not count == 0:
                                	Lextinct.append(p)
                                	Lextinct.append(SC.tree_points[p].parent)
                        count +=1




##########################################################
	pxtocheck = [SC.tree_points[toto].x for toto in  SC.tree_points_to_check]
#	print (pxtocheck)
        max_x = max(pxtocheck)
#	print (max_x)
	min_x = min(pxtocheck)
	#if j%50 == 0:
	#	for g in SC.attr_points:
	#		if g.status == True and g.x > min_x and g.x < max_x+100:
	#			a.append(g)
	#	print len(a)

###########################################################

###old way
#        new_points_to_check = []
#
#        for p in SC.tree_points_to_check:
#            if not (p in Lextinct):
#                new_points_to_check.append(p)
#
#        
#        SC.tree_points_to_check = new_points_to_check[:]
        
        ##new way -> we tell the points they are not live anymore
        for p in Lextinct:
            SC.tree_points[p].alive = False

        r = SC.grow_tree(max_x,min_x)
        if r == -1:
            break
        j = j+1
#        print "iteration:",j,"; number of active attraction points:",SC.nb_active_attr_points, "number of nodes to check: ", len(SC.tree_points_to_check)

        still_alive = False
        for p in SC.tree_points_to_check:
            if SC.tree_points[p].alive:
                still_alive = True
                break

        if not still_alive:
            print "No points to check are still alive -> ending"
            break

    
    
    if j == IMAX:
        print "Reached max iteration!","; number of active attraction points:",SC.nb_active_attr_points
    
    if not attr_file is None:
        res_name = attr_file +".results"
    else:
        res_name = "POINTS.txt.results"
    
    print "tree generated. number of nodes",len(SC.tree_points),"\n writing results in",res_name,"files"
    
    SC.write_tree(res_name)
    
    
    print "written."
    
    if len(sys.argv) < 5:
        print "rendering 2D view"
    
        import matplotlib.pyplot as plt
    
        X = [p.x for p in SC.tree_points]
        Y = [p.y for p in SC.tree_points]
        AgeMap = SC.getAgeMap()
        C = [AgeMap[p.id] for p in SC.tree_points]
    
    
        plt.scatter(X,Y,c=C,marker=",", linewidth=0)
        plt.show()


#    print "rendering 3D view"
#    
#    import matplotlib.pyplot as plt
#    from mpl_toolkits.mplot3d import Axes3D
#    fig = plt.figure()
#    ax = fig.add_subplot(111, projection='3d')
#
#
#    for p in SC.tree_points:
#        if not p.parent is None:
#            
#            par = SC.tree_points[p.parent]
#            ax.plot((p.x, par.x), (p.y, par.y) , (p.z, par.z) )
#            
#        
#    plt.show()
