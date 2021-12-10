export class MenuItem {
    constructor(
        public name: string,
        public route: string,
    ) {}
}

export const userMenuList = [
    new MenuItem('Dashboard', 'dashboard'),
    new MenuItem('My badges', 'badges'),
    new MenuItem('My profile', 'profile'),
];

export const adminMenuList = [
    new MenuItem('User List', 'users'),
    new MenuItem('Badge List', 'badges'),
    new MenuItem('Requested badges', 'requested-badges'),
    new MenuItem('My Profile', 'profile')
];