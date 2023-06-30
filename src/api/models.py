from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import check_password_hash

db = SQLAlchemy()

class User(db.Model):
    
    id = db.Column(db.Integer, primary_key=True)
    names = db.Column(db.String(120), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(220), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.names,
            "email": self.email,
            # do not serialize the password, its a security breach
        }
    def check_password(self, password):
        return check_password_hash(self.password, password)