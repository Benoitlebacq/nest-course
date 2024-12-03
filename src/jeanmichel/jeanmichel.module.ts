import { Module } from '@nestjs/common';
import { JeanmichelController } from './jeanmichel.controller';

@Module({
  controllers: [JeanmichelController]
})
export class JeanmichelModule {}
