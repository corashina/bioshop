// Stub for userService
export type UserProfile = {
  displayName?: string;
  email?: string;
  uid?: string;
};

export class UserService {
  static async getUserProfile(uid?: string) {
    return null;
  }
  static async createOrUpdateUser(user: any) {
    return null;
  }
} 