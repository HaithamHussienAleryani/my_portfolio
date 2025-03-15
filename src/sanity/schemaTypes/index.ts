import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {postType} from './postType'
import {authorType} from './authorType'
import {projectType} from "@/sanity/schemaTypes/projectType";
import technologyType from "@/sanity/schemaTypes/technologyType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, postType, authorType,technologyType,projectType],
}



