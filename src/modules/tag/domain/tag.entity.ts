import { TagProps } from './tag.types';
import { InvalidTagNameError, InvalidTagSlugError } from './tag.errors';

export class TagEntity {
  private constructor(private readonly props: Required<TagProps>) {}

  static create(props: TagProps): TagEntity {
    if (props.name.trim().length === 0 || props.name.length > 100) {
      throw new InvalidTagNameError();
    }
    if (props.slug.trim().length === 0 || props.slug.length > 100) {
      throw new InvalidTagSlugError();
    }
    return new TagEntity({
      id: props.id ?? BigInt(0),
      name: props.name,
      slug: props.slug,
    });
  }
}
