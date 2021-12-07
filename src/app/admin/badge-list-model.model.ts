export class BadgeListItem{
    constructor(
        public columnName:string, 
        public columnStyle: string
    ) {} 
}

export const badgeList = [
    new BadgeListItem('#ID', 'col'),
    new BadgeListItem('', 'col'),
    new BadgeListItem('Name', 'col'),
    new BadgeListItem('Level', 'col'), 
    new BadgeListItem('Date', 'col'), 
    new BadgeListItem('', 'col-3')
];

export const requestedBadges = [
    new BadgeListItem('User Name', 'col-2'),
    new BadgeListItem('', 'col'),
    new BadgeListItem('Name', 'col'),
    new BadgeListItem('Level', 'col'), 
    new BadgeListItem('Requested Date', 'col'), 
    new BadgeListItem('', 'col-3')
]