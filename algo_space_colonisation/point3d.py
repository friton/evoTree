#!/usr/lib/python


class point3d:
    """
    simple generic 3d point class
    """
    def __init__(self,x,y,z):
        self.x = x
        self.y = y
        self.z = z
    
    def dist_from(self,p):
        """
        Takes:
            - p (point3d): a 3d point

        Returns:
            (float): euclidian distance between self and p
        """
        return ((p.x - self.x)**2 + (p.y - self.y)**2 +(p.z - self.z)**2)**0.5
    
    

class attr_point(point3d):
    def __init__(self,x,y,z,min_r,max_r):
        """
        Takes:
            - min_r (float): radius under which the attraction point is inactive
            - max_r (float): radius above which the attraction point does not attract
        """
        point3d.__init__(self,x,y,z)
        
        self.min_r = min_r
        self.max_r = max_r
        
        self.status = True # means the attraction point is active
        
    def get_closest_point(self,lp,max_x,min_x):
        """
        Takes:
            - lp (list): list of tree_point

        Returns:
            (int): id of the closest tree_point to self (None if they are too close or too far)
        """
        
        m = self.max_r
        
        mi = None
        if self.x <= max_x+self.max_r+1 and self.x >= min_x:
            for i,p in enumerate(lp):
                d = self.dist_from(p)
            

                if d < m:
                    m = d
                    mi = p.id
                
                if m <= self.min_r:
                    self.status = False
                    return None
        
        return mi

    def in_min_radius(self,p):
        d = self.dist_from(p)
        if d <= self.min_r:
            return True
        return False

    def in_max_radius(self,p):
        d = self.dist_from(p)
        if d <= self.max_r:
            return True
        return False



class tree_point(point3d):
    def __init__(self,x,y,z,id=None,parent = None):
        """
        Takes:
            - x (float)
            - y (float)
            - z (float)
        
        """
        point3d.__init__(self,x,y,z)
        
        self.id = id ##id of the node

        self.parent = parent #id of the parent
        
        self.precvec  = (0.,0.,0.) ##value of last vector that created a son. This is here to prevent infiinite loop

        self.alive=True #just a bool to know if we want a son from that one or not


        self.parent_vector = None ## if not none, will be used to create a son  

        #self.son_list = [] ##list of son, used for decimating

    def set_parent_vector(self,parentPos):
        """ 
        Sets self.parent_vector, which will be used to compute a more "organic" son position
        Takes:
            - parentPos (tuple): position of the parent
        """
        self.parent_vector = (self.x - parentPos[0] , self.y - parentPos[1] , self.z - parentPos[2] )

        
    def get_vector(self,p):
        """
        Takes:
            - p (point3d): point to compute a vector with
            
        Returns:
            (tuple): tuple of the 3d vector from self to p
        """
        return ((p.x - self.x),(p.y - self.y),(p.z - self.z))
    
    def get_med_vector(self,lp):
        """
        Takes:
            - lp (list): list of point3d 
        
        Returns:
            (tuple): mean 3d vector from self to all point in lp
        """
        lv = [self.get_vector(p) for p in lp]
       
        lx,ly,lz = zip(*lv)
        
        dx = sum(lx) / len(lx)
        dy = sum(ly) / len(ly)
        dz = sum(lz) / len(lz)
        

        norm = (dx**2 + dy**2 + dz**2)**0.5
    	'''gx = norm
	gy = 0.
	dx = (dx+gx)/2
	dy = (dy+gy)/2'''
        
        return dx/norm, dy/norm, dz/norm
    
    def create_son(self,lp):
        """
        Takes:
            - lp (list): list of point3d 
        
        Returns:
            (tree_point): son of self placed with the mean 3d vector from self to all point in lp
        """
        vec = self.get_med_vector(lp)
        if not self.parent_vector is None:
            dx = (vec[0] + self.parent_vector[0]) / 2.
            dy = (vec[1] + self.parent_vector[1]) / 2.
            dz = (vec[2] + self.parent_vector[2]) / 2.

            norm = (dx**2 + dy**2 + dz**2)**0.5
            	
            vec = (dx/norm, dy/norm, dz/norm)

        if self.precvec  == vec:
            if len(lp)> 1:
                vec = self.get_med_vector(lp[1:])
    
        self.precvec = vec
        
        #print self.id , vec
    
        son = tree_point(self.x + vec[0], self.y + vec[1], self.z + vec[2], None, self.id)
        
        ##addtioinal step for a more organic trajectory
        son.set_parent_vector( (self.x,self.y,self.z) )

        return son
    
