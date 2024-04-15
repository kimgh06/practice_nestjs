import { Controller, MessageEvent, Query, Sse } from '@nestjs/common';
import { Observable, interval, map } from 'rxjs';

@Controller('sse')
export class SseController {

  @Sse("")
  sse(@Query("id") id: string): Observable<MessageEvent> {
    let asdf: string[] = [];
    let len: number;
    return interval(1000).pipe(map(() => {
      len = asdf.length;
      asdf.push(id);
      return {
        data: {
          hello: asdf.length - len,
          asdf: asdf,
          len: len
        }
      };
    }))
  }
}
