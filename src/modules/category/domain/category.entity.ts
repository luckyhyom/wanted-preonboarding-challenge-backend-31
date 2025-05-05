import { CategoryProps } from './category.types';
import { CategoryName } from './value-objects/category-name.vo';
import { CategorySlug } from './value-objects/category-slug.vo';
import { CategoryDescription } from './value-objects/category-description.vo';

export class CategoryEntity {
  private constructor(
    public readonly id: bigint,
    public readonly name: CategoryName,
    public readonly slug: CategorySlug,
    public readonly description: CategoryDescription,
    public readonly parentId: bigint | null,
    public readonly level: number,
    public readonly imageUrl?: string,
    // TypeORM이 hydration 시 사용
    public readonly parent?: CategoryEntity | null,
    public readonly children?: CategoryEntity[],
  ) {}

  static create(props: CategoryProps): CategoryEntity {
    const entity = new CategoryEntity(
      props.id ?? BigInt(0),
      props.name,
      props.slug,
      props.description,
      props.parentId ?? null,
      props.level,
      props.imageUrl,
      null,
      [],
    );

    return entity;
  }
}
