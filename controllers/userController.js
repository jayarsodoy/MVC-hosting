// // controllers/userController.js
// import { getAllUsers } from '../models/userModel.js';

// export const showUsers = async (req, res) => {
//   try {
//     const users = await getAllUsers();
//     res.json(users);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Server Error');
//   }
// };

// controllers/userController.js
import { getAllUsers } from "../models/userModel.js";

export const showAddUserPage = async (req, res) => {
  try {
    const users = await getAllUsers();
    res.render("html/user-pages/add", { users });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};
