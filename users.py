#!py
from sqlalchemy import Column, Integer, String
from database import Base

class User(Base):
    """A user capable of viewing reports.

    :param str username: user's username
    :param str password: encrypted password for the user
    :param str username: user's email

    """
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True)
    username = Column(String(50))
    password = Column(String(50))
    email = Column(String(50))
    
    def __init__(self, username, password, email):
    #ai id?
        self.username = username
        self.password = password
        self.email = email
        
    def __repr__(self):
        return "<User:" + str(self.username)+">"

    def is_active(self):
        """True, as all users are active."""
        return True

    def get_id(self):
        """Return the email address to satisfy Flask-Login's requirements."""
        return self.id

    def is_authenticated(self):
        """Return True if the user is authenticated."""
        return True

    def is_anonymous(self):
        """False, as anonymous users aren't supported."""
        return False
       