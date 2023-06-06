import { User } from '06-entities/User';

export interface Comment {
    id: string;
    user: User;
    text: string;
}
