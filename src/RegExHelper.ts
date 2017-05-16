﻿export class RegExHelper {
    public static getMatches(input: string, regex: RegExp) {
        var final = [];

        var groups;
        while(groups = regex.exec(input)) {            
            final.push(groups.slice(1));
        }

        return final;
    }
}