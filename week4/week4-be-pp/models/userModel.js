
let userArray = [];
let nextId = 1;

const getAll = () => {
    return userArray;
}

const addOne = (name, email, password, phone_number, gender, date_of_birth, membership_status) => {
    if (!name || !email || !password || !phone_number ||!gender || !date_of_birth || !membership_status) {
    }
    
    const newUser = {
        id: nextId++,
        name, 
        email,
        password,
        phone_number,
        gender,
        date_of_birth,
        membership_status
    }

    userArray.push(newUser);
    return newUser;
}

const findById = (id) => {
    const user = userArray.find(user => user.id === Number(id));
    if(user) {
        return user;
    } else{
        return false;
    }
}

// const updateOneById = (id, updatedData) => {
//     const user = findById(id);
//     if(user) {
//         if(updatedData.name) userArray.name = updatedData.name;
//         if(updatedData.email) userArray.email = updatedData.email;
//         if(updatedData.password) userArray.password = updatedData.password;
//         if(updatedData.phone_number) userArray.phone_number = updatedData.phone_number;
//         if(updatedData.gender) userArray.gender = updatedData.gender;
//         if(updatedData.date_of_birth) userArray.date_of_birth = updatedData.date_of_birth;
//         if(updatedData.mambership_status) userArray.membership_status = updatedData.membership_status;
//         return user;
//     }
//     return false;
// };


const updateOneById = (id, updatedData) => {
  const user = findById(id);
  if (user) {
    if(updatedData.name) {
        user.name = updatedData.name;
    }
    if (updatedData.email) {
      user.email = updatedData.email;
    }
    if(updatedData.password) {
        user.password = updatedData.password;
    }
    if(updatedData.phone_number){
        user.phone_number = updatedData.phone_number;
    }
    if(updatedData.gender) {
        user.gender = updatedData.gender;
    }
    if(updatedData.date_of_birth) {
        user.date_of_birth = updatedData.date_of_birth;
    }
    if(updatedData.mambership_status) {
        user.membership_status = updatedData.membership_status;
    }
    return user;
  }
  return false;
};



const deleteOneById = (id) => {
    const user = findById(id);
    if (user) {
        const initialLenght = userArray.length;
        userArray = userArray.filter((user) => user.id !== Number(id));
        return userArray.length < initialLenght;
    }
    return false;
};


if (require.main === module); {
  let result = addOne("minna", "minn@gmail.com", "seijsij", "5005959084", "male", "2000-3-??", "not active");
  console.log(result);
  result = addOne("henns", "srg@gmail.com", "senna", "5005959084", "male", "2000-3-??", "active");
  console.log(result);
  console.log("getAll called:", getAll());
  console.log("findById called:", findById(2));
  console.log(
    "updateById called:", updateOneById(2, {
        name: "mia",
      email: "mia@sgsd",
      password: "esgrsg",
      phone_number: "49380938",
      date_of_birth: "4533",
      gender: "female",
      membership_status: "active"

    })
  );

  console.log("deleteById called:", deleteOneById(2));
  console.log("get all", getAll());
 }


const User = {
    getAll,
    addOne,
    findById,
    updateOneById,
    deleteOneById
}
module.exports = User;