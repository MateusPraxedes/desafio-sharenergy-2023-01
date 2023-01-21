import { Module } from '@nestjs/common';
import { CustumerModule } from './modules/custumer/custumer.module';

@Module({
  imports: [CustumerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
