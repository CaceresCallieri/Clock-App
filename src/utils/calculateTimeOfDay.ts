import { TimeOfDay } from '../types/types';

function calculateTimeOfDay(hour: number): TimeOfDay{
    if (hour >= 6 && hour < 12) {
        return 'morning';
    } else if (hour >= 12 && hour < 18) {
        return 'day';
    } else if (hour >= 18 && hour < 20) {
        return 'afternoon';
    } else {
        return 'night';
    }
}


export default calculateTimeOfDay