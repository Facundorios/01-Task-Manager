import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//Interfaces
import { LoginUser, CreateUser } from "../interfaces/index";

import { User } from "../models";
import { envs } from "../environments/environments";

const { JWT_SECRET_KEY } = envs;

export class AuthService {
    public async registerUser(userData: CreateUser): Promise<{ user: User, token: string } | undefined> {
        try {
            const { name, email, password } = userData;

            //verificar si el email ya existe
            const exist_email = await User.findOne({
                where: { email }
            });
            if (exist_email) {throw new Error("Email already exists");}

            const hashedPassword = await bcrypt.hash(password, 10);
            const user = await User.create({ name, email, password: hashedPassword });

            const token = jwt.sign({ id: user.id }, JWT_SECRET_KEY, {
                expiresIn: '1h'
            });

            return { user, token };
        } catch (error) {
            console.error("Error registering user:", error);
            throw new Error("Registration failed");
        }
    }

    public async loginUser(user: LoginUser): Promise<{ user: User, token: string } | undefined> {
        
        //verificar si el usuario existe mediante el email
        const exist_user = await User.findOne({
            where: { email: user.email }
        });
        if (!exist_user) {
            throw new Error("User not found");
        }

        const validPassword = await bcrypt.compare(user.password, exist_user.password);
        if (!validPassword) {
            throw new Error("Invalid password");
        }

        const token = jwt.sign({ id: exist_user.id }, JWT_SECRET_KEY, {
            expiresIn: '1h'
        });

        return { user: exist_user, token };
    }

}