import { User } from "../models";

export class UserService {
    public async gettAllUsers() {
        return await User.findAll();
    }

    public async getUserById(id: string) {
        return await User.findByPk(id);
    }
}