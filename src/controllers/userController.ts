import { Request, Response } from 'express';
import { getPrismaClient } from ".././database/prisma";

export const UserController = {
  async getUsers(req: Request, res: Response) {
    try {
      const users = await getPrismaClient().user.findMany();
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to retrieve users' });
    }
  },

  // async getUserById(req: Request, res: Response) {
  //   try {
  //     const { id } = req.params;
  //     const user = await getPrismaClient().user.findUnique({ where: { id: parseInt(id) } });
  //     if (!user) {
  //       res.status(404).json({ error: 'User not found' });
  //       return;
  //     }
  //     res.json(user);
  //   } catch (error) {
  //     console.error(error);
  //     res.status(500).json({ error: 'Failed to retrieve user' });
  //   }
  // },

  // async createUser(req: Request, res: Response) {
  //   try {
  //     const { name, email } = req.body;
  //     const user = await getPrismaClient().user.create({ data: { name, email } });
  //     res.status(201).json(user);
  //   } catch (error) {
  //     console.error(error);
  //     res.status(500).json({ error: 'Failed to create user' });
  //   }
  // },

  // async updateUser(req: Request, res: Response) {
  //   try {
  //     const { id } = req.params;
  //     const { name, email } = req.body;
  //     const user = await getPrismaClient().user.update({
  //       where: { id: parseInt(id) },
  //       data: { name, email }
  //     });
  //     res.json(user);
  //   } catch (error) {
  //     console.error(error);
  //     res.status(500).json({ error: 'Failed to update user' });
  //   }
  // },

  // async deleteUser(req: Request, res: Response) {
  //   try {
  //     const { id } = req.params;
  //     await getPrismaClient().user.delete({ where: { id: parseInt(id) } });
  //     res.json({ message: 'User deleted successfully' });
  //   } catch (error) {
  //     console.error(error);
  //     res.status(500).json({ error: 'Failed to delete user' });
  //   }
  // }
};
