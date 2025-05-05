import { CategoryName } from './value-objects/category-name.vo';
import { CategorySlug } from './value-objects/category-slug.vo';
import { CategoryDescription } from './value-objects/category-description.vo';

export interface CategoryProps {
  id?: bigint;
  name: CategoryName;
  slug: CategorySlug;
  description?: CategoryDescription;
  parentId?: bigint;
  level: number;
  imageUrl?: string;
}
