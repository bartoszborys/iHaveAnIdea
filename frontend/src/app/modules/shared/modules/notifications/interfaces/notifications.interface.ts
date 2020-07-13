import { NotificationsTypes } from '../constants/notifications-types.constant';

export interface Notifications {
    title: string;
    message: string;
    type: NotificationsTypes;
}