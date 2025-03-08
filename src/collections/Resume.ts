// src/collections/Resume.js
import type { CollectionConfig } from 'payload'

export const Resume: CollectionConfig = {
  slug: 'resumes',  // The name of the collection
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'text',
      required: true,
    },
    {
      name: 'phone',
      type: 'text',
      required: false,
    },
    {
      name: 'workExperience',
      type: 'array',
      fields: [
        {
          name: 'jobTitle',
          type: 'text',
          required: true,
        },
        {
          name: 'company',
          type: 'text',
          required: true,
        },
        {
          name: 'startDate',
          type: 'date',
          required: true,
        },
        {
          name: 'endDate',
          type: 'date',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          required: false,
        },
      ],
    },
    {
      name: 'education',
      type: 'array',
      fields: [
        {
          name: 'degree',
          type: 'text',
          required: true,
        },
        {
          name: 'institution',
          type: 'text',
          required: true,
        },
        {
          name: 'graduationYear',
          type: 'number',
          required: true,
        },
      ],
    },
    {
      name: 'skills',
      type: 'array',
      fields: [
        {
          name: 'skill',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'languages',
      type: 'array',
      fields: [
        {
          name: 'language',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'hobbies',
      type: 'array',
      fields: [
        {
          name: 'hobby',
          type: 'text',
          required: true,
        },
      ],
    }
  ],
};