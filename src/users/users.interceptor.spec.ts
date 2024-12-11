import { UsersPasswordInterceptor } from "./usersPassword.interceptor";

describe('UsersInterceptor', () => {
  it('should be defined', () => {
    expect(new UsersPasswordInterceptor()).toBeDefined();
  });
});
