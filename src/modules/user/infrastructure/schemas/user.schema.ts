import { EntitySchema } from 'typeorm';
import { UserEntity } from '../../domain/user.entity';

export const UserSchema = new EntitySchema<UserEntity>({
  name: 'UserEntity',
  target: UserEntity,
  tableName: 'users',
  columns: {
    id: {
      type: 'bigint',
      primary: true,
      generated: 'increment',
      transformer: {
        to: (v: bigint) => v.toString(), // DB에는 문자열로 저장
        from: (v: string) => BigInt(v), // 애플리케이션엔 bigint로 로드
      },
    },
    name: { type: String, length: 100 },
    email: { type: String, length: 100, unique: true },
    avatarUrl: {
      name: 'avatar_url',
      type: String,
      length: 255,
      nullable: true,
    },
    createdAt: {
      name: 'created_at',
      type: 'timestamp',
      default: () => 'CURRENT_TIMESTAMP(6)',
      nullable: false,
      createDate: true,
    },
  },
});
