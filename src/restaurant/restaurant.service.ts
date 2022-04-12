import { Injectable } from '@nestjs/common';

@Injectable()
export class OlaService {
    message() {
        return 'ola boa noite';
    }
}
