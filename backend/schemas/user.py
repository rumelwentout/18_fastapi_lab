def userEntity(item) -> dict:
    return {
        "id": str(item["_id"]),
        "username": item["username"],
        "email": item["email"],
        "password": item["password"],  
        "phoneNumber": item.get("phoneNumber", "")  
    }
def usersEntity(entity) -> list:
    return [userEntity(item) for item in entity]
