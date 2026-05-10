let users = [
    {id: 1, name: 'Himu'},
    {id: 2, name: 'varun'}
];
// temporary databse only saves in ram

exports.getUsers = (req,res)=>{
    res.status(200).json({
        success : true,
        users
    });
};

exports.createUser = (req,res)=>{
    const {name} = req.body;
    if(!name){
        return res.status(400).json({
            success : true,
            message : 'name is required'
        });
    }

    const newUser = {
        id:users.length + 1,
        name
    };
    users.push(newUser);

    res.status(200).json({
        success : true,
        message : 'new user created',
        user : newUser
    });
};

exports.updateUser = (req,res)=>{
    const {id} = req.params;
    const {name} = req.body;
    const user = users.find(u => u.id == id);

    if(!user){
        res.status(404).json({
            success : false,
            message : 'user not find'
        });
    }
    user.name = name || user.name;
    res.status(200).json({
        success : true,
        message : 'user updated',
        user
    });
};

exports.deleteUser = (req,res)=>{
    const {id} = req.params;
    users = users.filter(u => u.id != id);
    res.status(200).json({
        success : true,
        message : `user ${id} deleted`
    });
};