"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

from werkzeug.security import generate_password_hash
api = Blueprint('api', __name__)


@api.route("/token", methods=["POST"])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    if not email or not password:
        return jsonify({"msg": "Missing email or password"}), 400

    user = User.query.filter_by(email=email).first()
    if not user:
        return jsonify({"msg": "User not found"}), 404

    if not user.check_password(password):
        return jsonify({"msg": "Invalid email or password"}), 401

    access_token = create_access_token(identity=user.email)
    return jsonify(access_token=access_token)

@api.route("/register", methods=["POST"])
def register():
    names = request.json.get("names")
    email = request.json.get("email")
    password = request.json.get("password")

    if not names or not email or not password:
        return jsonify({"msg": "Missing required fields"}), 400

    existing_user = User.query.filter_by(email=email).first()
    if existing_user:
        return jsonify({"msg": "Email already exists"}), 409

    hashed_password = generate_password_hash(password)
    new_user = User(names=names, email=email, password=hashed_password, is_active=True)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({"msg": "User registered successfully"}), 201

@api.route("/users", methods=["GET"])
def get_all_users():
    try:
        # Retrieve all user records from the database
        users = User.query.all()

        # Serialize the users to JSON
        user_list = []
        for user in users:
            user_data = {
                "id": user.id,
                "names": user.names,
                "email": user.email,
                # Add any other relevant user fields
            }
            user_list.append(user_data)

        return jsonify(user_list), 200
    except Exception as e:
        return jsonify({"msg": "Failed to retrieve users"}), 500
    
@api.route("/users/delete-all", methods=["DELETE"])
def delete_all_users():
    try:
        # Delete all user records from the database
        User.query.delete()
        db.session.commit()

        return jsonify({"msg": "All users deleted successfully"}), 200
    except Exception as e:
        return jsonify({"msg": "Failed to delete users"}), 500
    
    