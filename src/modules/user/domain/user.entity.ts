import { UserProps } from './user.types';
import { InvalidNameError, InvalidEmailError } from './user.errors';

export class UserEntity {
  private constructor(private readonly props: Required<UserProps>) {}

  static create(props: UserProps): UserEntity {
    // domain validations
    if (props.name.trim().length === 0 || props.name.length > 100) {
      throw new InvalidNameError();
    }

    const emailRegex = /^[\w.!#$%&'*+/=?`{|}~^-]+@[\w.-]+\.[A-Za-z]{2,}$/;
    if (!emailRegex.test(props.email)) {
      throw new InvalidEmailError();
    }

    const now = props.createdAt ?? new Date();
    return new UserEntity({
      id: props.id ?? BigInt(0), // MySQL의 AUTO_INCREMENT 컬럼에 0 또는 NULL 을 삽입하면, “다음 시퀀스 값”을 자동으로 할당
      name: props.name,
      email: props.email,
      avatarUrl: props.avatarUrl ?? null,
      createdAt: now,
    });
  }
}
