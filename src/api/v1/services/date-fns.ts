import { getDay, parseISO } from "date-fns";
import { Service } from "typedi";

@Service()
export class DateFns {
    getDayOfTheWeek(date: string) {
        const id = getDay(new Date(date));

        return id;
    }
}
