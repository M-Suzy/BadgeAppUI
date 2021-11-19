export class MenuItem {
    constructor(
        public name: string,
        public route: string,
    ) {}
}

export const userMenuList = [
    new MenuItem('Profile', 'profile'),
    new MenuItem('My badges', 'personal-badges'),
    new MenuItem('Requested badges', 'requested-badges'),
    new MenuItem('Available badges', 'all-badges')
];

export const adminMenuList = [
    new MenuItem('Profile', 'profile'),
    new MenuItem('User List', 'user-list'),
    new MenuItem('Badge List', 'badge-list'),
    new MenuItem('Requested badges', 'requested-badges')
];