import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

    transform(value: string, addition: number) {
        if(addition != undefined || addition != null){
            return value.substr(0, value.indexOf(' ')) + ' ' + addition;
        }
        return value.substr(0, value.indexOf(' '));
    }
}