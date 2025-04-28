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
      id: props.id ?? 0, // 0 ⇒ not persisted yet
      name: props.name,
      email: props.email,
      avatarUrl: props.avatarUrl ?? null,
      createdAt: now,
    });
  }
}
