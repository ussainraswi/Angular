import {Injectable, Inject} from "@angular/core";
import {User} from "../model/user.model";
import {USER} from "../mock/user.mock";



@Injectable()
export class UtilityService {
        isLogged() : Promise<boolean> {
            if(typeof (Storage) !== "undefined" ) {
                if(sessionStorage.getItem('User')) {
                    return Promise.resolve(true);
                }
                return Promise.resolve(false);

            }
        }
}
