import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {postType} from './postType'
import {authorType} from './authorType'
import {projectType} from "@/sanity/schemaTypes/projectType";
import technologyType from "@/sanity/schemaTypes/technologyType";
import {portfolioContentType} from "@/sanity/schemaTypes/portfolioType";
import {serviceType} from "@/sanity/schemaTypes/serviceType";
import {testimonialType} from "@/sanity/schemaTypes/testimonialType";
import {socialType} from "@/sanity/schemaTypes/socialType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, postType,socialType,testimonialType,serviceType,technologyType,projectType,portfolioContentType ,authorType],
}



