exports.createUserDTO = (body) => {

  return {
    name: body.name,
    email: body.email,
    age: body.age
    
  };

};