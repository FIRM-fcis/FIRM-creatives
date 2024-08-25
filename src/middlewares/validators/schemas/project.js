import Joi from 'joi';

export const createProjectSchema = Joi.object({
    title: Joi.string().min(3).max(30).required().messages({
        'string.base': 'Title must be a string',
        'string.empty': 'Title cannot be empty',
        'string.min': 'Title must be at least 3 characters',
        'string.max': 'Title must be at most 30 characters',
        'any.required': 'Title is required',
    }),
    description: Joi.string().min(3).max(300).optional().messages({
        'string.base': 'Description must be a string',
        'string.empty': 'Description cannot be empty',
        'string.min': 'Description must be at least 3 characters',
        'string.max': 'Description must be at most 300 characters',
        'any.required': 'Description is required',
    }),
    tags: Joi.array().items(Joi.string().min(3).max(30)).optional().messages({
        'array.base': 'Tags must be an array',
        'array.empty': 'Tags cannot be empty',
        'any.required': 'Tags is required',
    }),
    images: Joi.array().items(Joi.string()).optional().messages({
        'array.base': 'Images must be an array',
        'array.empty': 'Images cannot be empty',
        'any.required': 'Images is required',
    }),
    videos: Joi.string().optional().messages({
        'string.base': 'Video must be a string',
        'string.empty': 'Video cannot be empty',
        'any.required': 'Video is required',
    }),
    tools: Joi.array().items(Joi.string().min(3).max(30)).optional().messages({
        'array.base': 'Tools must be an array',
        'array.empty': 'Tools cannot be empty',
        'any.required': 'Tools is required',
    }),
    openToBeSaved: Joi.boolean().optional().messages({
        'boolean.base': 'Open to be saved must be a boolean',
        'any.required': 'Open to be saved is required',
    })
});