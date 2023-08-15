from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import check_password_hash
from sqlalchemy.orm import relationship
db = SQLAlchemy()


class User(db.Model):

    id = db.Column(db.Integer, primary_key=True)
    names = db.Column(db.String(120), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(220), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    favorite_cards = relationship("Card", secondary="user_favorite_cards")

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


class Card(db.Model):
    # Change data type to match User's id
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=True)
    symbol = db.Column(db.String(10), unique=True, nullable=True)
    input_price = db.Column(db.Float, nullable=True)
    favorite_users = db.relationship(
        "User", secondary="user_favorite_cards", overlaps="favorite_cards")


user_favorite_cards = db.Table(
    "user_favorite_cards",
    db.Column("user_id", db.Integer, db.ForeignKey(
        "user.id"), primary_key=True),
    db.Column("card_id", db.Integer, db.ForeignKey("card.id"),
              primary_key=True),  # Change data type to match User's id
    db.Column("input_price", db.Float, nullable=True),
)
