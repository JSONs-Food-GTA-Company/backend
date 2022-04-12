import { Injectable } from '@nestjs/common';

@Injectable()
export class OlaService {
    message() {
        return 'Rodando no Docker';
    }
}
