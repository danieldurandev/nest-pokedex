import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { PokemonModule } from './pokemon/pokemon.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CommonModule } from './common/common.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "..", "public" )
    }),

    MongooseModule.forRoot("mongodb+srv://daniel:FQqe1u2NyBubiqyP@calendardb.mq8fmja.mongodb.net/nest-pokemon"),

    PokemonModule,

    CommonModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
