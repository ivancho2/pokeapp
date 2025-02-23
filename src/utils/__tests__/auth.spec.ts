import { checkAuth, loginUser, getUsername, logoutUser } from '../auth';

describe('auth utils', () => {
    beforeEach(() => {
        sessionStorage.clear();
    });

    test('checkAuth should return false if no user is logged in', () => {
        expect(checkAuth()).toBe(false);
    });

    test('checkAuth should return true if a user is logged in', () => {
        sessionStorage.setItem('username', 'testuser');
        expect(checkAuth()).toBe(true);
    });

    test('loginUser should store the username in sessionStorage', () => {
        loginUser('testuser');
        expect(sessionStorage.getItem('username')).toBe('testuser');
    });

    test('getUsername should return the username from sessionStorage', () => {
        sessionStorage.setItem('username', 'testuser');
        expect(getUsername()).toBe('testuser');
    });

    test('getUsername should return null if no username is stored in sessionStorage', () => {
        expect(getUsername()).toBeNull();
    });

    test('logoutUser should remove the username from sessionStorage', () => {
        sessionStorage.setItem('username', 'testuser');
        logoutUser();
        expect(sessionStorage.getItem('username')).toBeNull();
    });
});