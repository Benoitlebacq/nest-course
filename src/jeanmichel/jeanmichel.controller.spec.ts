import { Test, TestingModule } from '@nestjs/testing';
import { JeanmichelController } from './jeanmichel.controller';

describe('JeanmichelController', () => {
  let controller: JeanmichelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JeanmichelController],
    }).compile();

    controller = module.get<JeanmichelController>(JeanmichelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
